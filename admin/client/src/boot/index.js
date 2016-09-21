import BootRoutes from './BootRoutes';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Config from 'lib/Config';
import reducerRegister from 'lib/ReducerRegister';
import * as configActions from 'state/config/ConfigActions';
import ConfigReducer from 'state/config/ConfigReducer';
import FormReducer from 'state/form/FormReducer';
import SchemaReducer from 'state/schema/SchemaReducer';
import RecordsReducer from 'state/records/RecordsReducer';
import CampaignReducer from 'state/campaign/CampaignReducer';
import BreadcrumbsReducer from 'state/breadcrumbs/BreadcrumbsReducer';
import { routerReducer } from 'react-router-redux';
import bootInjector from 'boot/BootInjector';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

// Sections
// eslint-disable-next-line no-unused-vars
import CampaignAdmin from 'containers/CampaignAdmin/controller';

function appBoot() {
  const baseUrl = Config.get('absoluteBaseUrl');
  const apolloClient = new ApolloClient({
    dataIdFromObject: o => `${o.__typename}:${o.id},`,
    networkInterface: createNetworkInterface({
      uri: `${baseUrl}graphql/`,
      opts: {
        credentials: 'same-origin',
      },
    }),
  });

  reducerRegister.add('config', ConfigReducer);
  reducerRegister.add('form', FormReducer);
  reducerRegister.add('schemas', SchemaReducer);
  reducerRegister.add('records', RecordsReducer);
  reducerRegister.add('campaign', CampaignReducer);
  reducerRegister.add('breadcrumbs', BreadcrumbsReducer);
  reducerRegister.add('routing', routerReducer);
  reducerRegister.add('apollo', apolloClient.reducer());

  bootInjector.start();

  const initialState = {};
  const rootReducer = combineReducers(reducerRegister.getAll());
  const middleware = [
    thunkMiddleware,
    apolloClient.middleware(),
  ];

  const env = Config.get('environment');
  const debugging = Config.get('debugging');
  let runMiddleware = applyMiddleware(...middleware);
  const devTools = window.devToolsExtension;

  if (env === 'dev' && debugging && typeof devTools === 'function') {
    runMiddleware = compose(applyMiddleware(...middleware), devTools());
  }

  const createStoreWithMiddleware = runMiddleware(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  // Set the initial config state.
  store.dispatch(configActions.setConfig(Config.getAll()));

  // Expose store for legacy use
  window.ss = window.ss || {};
  window.ss.store = store;

  // Bootstrap routing
  const routes = new BootRoutes(store, apolloClient);
  routes.start(window.location.pathname);
}

window.onload = appBoot;
