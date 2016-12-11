import { getOperationName, addFragmentsToDocument, getOperationDefinition } from 'apollo-client/queries/getFromAST';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';
}

/**
 *
 * @param document
 * @param queryName
 * @param fragmentDefinition
 */
function addFragmentSpreadToQueryDefinition(document, queryName, fragmentDefinition) {
  const operationDef = getOperationDefinition(document);
  const fragmentName = fragmentDefinition.name.value;
  // TODO Make immutable
  operationDef.selectionSet.selections.forEach(selection => {
    if (selection.kind === 'Field' && selection.name.value === queryName) {
      selection.selectionSet.selections.push({
        kind: 'FragmentSpread',
        name: {
          kind: 'Name',
          value: fragmentName,
        },
        directives: [],
      });
    }
  });
  return document;
}

export class GraphQLRegister {

  constructor() {
    this.customFragments = {};
  }

  /**
   * @param {String} operationName
   * @param {String} queryName
   * @param {Document} fragment
   */
  addCustomFragment(operationName, queryName, fragment) {
    if (!this.customFragments[operationName]) {
      this.customFragments[operationName] = {};
    }

    if (!this.customFragments[operationName][queryName]) {
      this.customFragments[operationName][queryName] = [];
    }

    this.customFragments[operationName][queryName].push(fragment);
  }

  addCustomOptions(operationName, callback) {
    // TODO
  }

  transformDocument(document, operationOptions) {
    // TODO Make document immutable
    let newDocument;
    const operationName = getOperationName(document);
    const fragmentsByQuery = this.customFragments[operationName];
    if (!fragmentsByQuery) {
      return document;
    }

    Object.keys(fragmentsByQuery).forEach(queryName => {
      const fragments = fragmentsByQuery[queryName] || [];
      fragments.forEach(fragment => {
        fragment.definitions.forEach(fragmentDefinition => {
          newDocument = addFragmentsToDocument(document, fragmentDefinition);
          newDocument = addFragmentSpreadToQueryDefinition(newDocument, queryName, fragmentDefinition);
        });
      });
    });

    return newDocument;
  }

  transformOptions(document, operationOptions) {
    // TODO Apply customisations
    return operationOptions;
  }

}

// TODO Fix registration across modules, see lib/Router.js for details
window.ss = window.ss || {};
window.ss.graphQLRegister = window.ss.graphQLRegister || new GraphQLRegister();

export function graphqlWithRegister(document, operationOptions) {

  const register = window.ss.graphQLRegister;

  return function wrappedGraphQLWithRegister(WrappedComponent) {
    let ComponentWithGraphQL;
    class WrappedGraphQLWithRegister extends Component {

      constructor() {
        super();

        // Lazy initialising of HOC to give GraphQL
        if (!ComponentWithGraphQL) {
          ComponentWithGraphQL = graphql(
            register.transformDocument(document, operationOptions),
            register.transformOptions(document, operationOptions)
          )(WrappedComponent);
        }
      }

      render() {
        return <ComponentWithGraphQL {...this.props} />;
      }
    }
    WrappedGraphQLWithRegister.displayName = `WrappedGraphQLWithRegister(${getDisplayName(WrappedComponent)})`;

    return WrappedGraphQLWithRegister;
  };
}

export default window.ss.graphQLRegister;
