<?php


namespace SilverStripe\ORM\Tests\EagerLoading\DataListEagerLoaderTest;


use SilverStripe\ORM\DataQuery;
use SilverStripe\ORM\NaiveDataQueryExecutor;

class DebuggableNaiveDataQueryExecutor extends NaiveDataQueryExecutor
{
    protected $queries = 0;

    public function execute(DataQuery $dataQuery, $modifier = null)
    {
        $this->queries++;
        return parent::execute($dataQuery, $modifier); // TODO: Change the autogenerated stub
    }

    public function reset()
    {
        $this->queries = 0;
    }

    public function getQueries()
    {
        return $this->queries;
    }

}