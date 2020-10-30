<?php


namespace SilverStripe\ORM\Tests\EagerLoading\DataListEagerLoaderTest;


use SilverStripe\ORM\DataQuery;
use SilverStripe\ORM\FutureQueryHints;
use SilverStripe\ORM\NaiveDataQueryExecutor;

class DebuggableNaiveDataQueryExecutor extends NaiveDataQueryExecutor
{
    protected $queries = 0;

    public function execute(DataQuery $dataQuery, ?string $modifier = null, ?FutureQueryHints $hints = null): iterable
    {
        $this->queries++;
        return parent::execute($dataQuery, $modifier);
    }

    public function getFirstRow(DataQuery $dataQuery, ?FutureQueryHints $hints = null): iterable
    {
        $this->queries++;
        return parent::getFirstRow($dataQuery);
    }

    public function getLastRow(DataQuery $dataQuery, ?FutureQueryHints $hints = null): iterable
    {
        $this->queries++;
        return parent::getLastRow($dataQuery);
    }

    public function getCount(DataQuery $dataQuery, ?FutureQueryHints $hints = null): string
    {
        $this->queries++;
        return parent::getCount($dataQuery);
    }

    public function reset()
    {
        $this->queries = 0;
    }

    public function getQueries(): int
    {
        return $this->queries;
    }

}
