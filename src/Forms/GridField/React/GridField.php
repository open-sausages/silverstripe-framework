<?php

namespace SilverStripe\Forms\GridField\React;

use LogicException;
use InvalidArgumentException;
use SilverStripe\Admin\GraphQL\GraphQLQuery;
use SilverStripe\Admin\GraphQL\GraphQLReadQuery;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Forms\FormField;
use SilverStripe\GraphQL\Manager;
use SilverStripe\ORM\ArrayLib;
use SilverStripe\ORM\DataObject;

class GridField extends FormField
{
    /**
     * Components list.
     *
     * @var array
     */
    protected $components = array();

    /**
     * @var string
     */
    protected $name = '';

    /**
     * @var string
     */
    protected $schemaComponent = 'ReactGridField';

    /**
     * @var string
     */
    protected $modelClass;

    /**
     * @var GraphQLQuery
     */
    protected $graphQLQuery;

    /**
     * @var array
     */
    protected $columns = [];

    /**
     * @var array
     */
    protected $filter = [];

    /**
     * @var array
     */
    protected $exclude = [];

    /**
     * @var array|string
     */
    protected $sort;

    /**
     * @var int
     */
    protected $limit = 10;

    /**
     * GridField constructor.
     * @param string $name
     * @param string $title
     * @param string $modelClass
     */
    public function __construct($name, $title = null, $modelClass = null)
    {
        parent::__construct($name, $title, null);

        $this->name = $name;

        if ($modelClass) {
            $this->setModelClass($modelClass);
        }

        $this->addExtraClass('react-grid-field');
    }

    /**
     * @param $class
     * @return $this
     */
    public function setModelClass($class)
    {
        if (!is_subclass_of($class, DataObject::class)) {
            // Todo: Otherwise, use your own GraphQL resolver and custom query! Yeah!
            throw new InvalidArgumentException('GridField only works with DataObject classes');
        }

        $this->modelClass = $class;

        return $this;
    }

    /**
     * @return string
     */
    public function getModelClass()
    {
        return $this->modelClass;
    }

    /**
     * @param $position
     * @param $component
     * @return $this
     */
    public function addComponent($position, $component)
    {
        $this->components[$component] = $position;

        return $this;
    }

    /**
     * @return array
     */
    public function getComponents()
    {
        $components = [];
        foreach ($this->components as $name => $pos) {
            $components[] = [
                'position' => $pos,
                'component' => $name,
            ];
        }

        return $components;
    }

    /**
     * Set GridField specific schema data
     */
    public function getSchemaDataDefaults()
    {
        $data = parent::getSchemaDataDefaults();
        if (!$this->getGraphQLQuery()) {
            $this->setGraphQLQuery($this->buildGraphQLQuery());
        }
        $query = $this->getGraphQLQuery()->getQueryData();
        $data['data']['queryName'] = $query->getField('QueryName');
        $data['data']['graphqlQuery'] = $query->toGraphQL();
        $data['data']['graphqlVariables'] = $this->buildVariables();
        $data['data']['components'] = $this->getComponents();

        return $data;
    }

    /**
     * @param GraphQLQuery $query
     * @return $this
     */
    public function setGraphQLQuery(GraphQLQuery $query)
    {
        $this->graphQLQuery = $query;

        return $this;
    }

    /**
     * @return GraphQLQuery
     */
    public function getGraphQLQuery()
    {
        return $this->graphQLQuery;
    }

    /**
     * @return array
     * @throws LogicException
     */
    public function getColumns()
    {
        // placeholder
        if (!empty($this->columns)) {
            return $this->columns;
        }

        if ($this->getModelClass()) {
            return singleton($this->getModelClass())->summaryFields();
        }

        throw new LogicException('Cannot determine columns without a modelClass assigned');
    }

    /**
     * @param array $filter
     * @return $this
     */
    public function setFilter(array $filter)
    {
        $this->filter = $filter;

        return $this;
    }

    /**
     * @return array
     */
    public function getFilter()
    {
        return $this->filter;
    }

    /**
     * @param array $exclude
     * @return $this
     */
    public function setExclude(array $exclude)
    {
        $this->exclude = $exclude;

        return $this;
    }

    /**
     * @return array
     */
    public function getExclude()
    {
        return $this->exclude;
    }

    /**
     * @param $sort
     * @return $this
     */
    public function setSort($sort)
    {
        $this->sort = $sort;

        return $this;
    }

    /**
     * @return array|string
     */
    public function getSort()
    {
        return $this->sort;
    }

    /**
     * @param $limit
     * @return $this
     */
    public function setLimit($limit)
    {
        $this->limit = $limit;

        return $this;
    }

    /**
     * @return int
     */
    public function getLimit()
    {
        return $this->limit;
    }

    /**
     * @return GraphQLQuery
     */
    protected function buildGraphQLQuery()
    {
        /* @var Manager $manager */
        $manager = Injector::inst()->get(Manager::class . '.admin');

        /* @var GraphQLQuery $query */
        $query = Injector::inst()->createWithArgs(
            GraphQLReadQuery::class,
            [
                $this->getModelClass(),
                $manager,
            ]
        );

        $query->setFields(array_keys($this->getColumns()));

        return $query;
    }

    /**
     * @return array|null
     */
    protected function buildVariables()
    {
        $variables = [];
        if (!empty($this->getFilter())) {
            $variables['Filter'] = $this->sanitiseKeys($this->getFilter());
        }
        if (!empty($this->getExclude())) {
            $variables['Exclude'] = $this->sanitiseKeys($this->getExclude());
        }
        $variables['limit'] = $this->getLimit();

        // This gets a bit dodgy. Would prefer to soft code this and guard against any changes to Connection API
        if ($this->getSort()) {
            $variables['sortBy'] = [];
            if (is_array($this->getSort())) {
                if (!ArrayLib::is_associative($this->getSort())) {
                    throw new InvalidArgumentException('Sort array must be key/value pairs of fieldName => sortDir');
                }
                foreach ($this->getSort() as $fieldName => $sortDir) {
                    $variables['sortBy'][] = [
                        'field' => $fieldName,
                        'direction' => $sortDir,
                    ];
                }
            } else {
                list($field, $dir) = explode(' ', $this->getSort());
                $variables['sortBy'][] = [
                    'field' => $field,
                    'direction' => $dir,
                ];
            }
        }

        return empty($variables) ? null : $variables;
    }

    /**
     * @param array $filters
     * @return array
     */
    protected function sanitiseKeys(array $filters)
    {
        $result = [];
        foreach ($filters as $key => $val) {
            $clean = str_replace(':', '__', $key);
            $result[$clean] = $val;
        }

        return $result;
    }
}
