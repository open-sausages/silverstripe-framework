<?php

namespace SilverStripe\Core;

use SilverStripe\EventDispatcher\Dispatch\Dispatcher;
use SilverStripe\EventDispatcher\Event\EventContextInterface;
use SilverStripe\EventDispatcher\Event\EventHandlerInterface;
use SilverStripe\ORM\Connect\NullDatabase;
use SilverStripe\ORM\DB;

/**
 * Boot a kernel without requiring a database connection.
 * This is a workaround for the lack of composition in the boot stages
 * of CoreKernel, as well as for the framework's misguided assumptions
 * around the availability of a database for every execution path.
 *
 * @internal
 */
class DatabaselessKernel extends CoreKernel
{
    protected $queryErrorMessage = 'Booted with DatabaseLessKernel, cannot execute query: %s';

    public function boot($flush = false)
    {
        $this->flush = $flush;

        $this->bootPHP();
        $this->bootManifests($flush);
        $this->bootErrorHandling();
        $this->bootConfigs();

        Dispatcher::singleton()->addHandler([
            // TODO Replace this with a simplified event implementation that supports anonymous functions
            // See https://github.com/silverstripe/silverstripe-event-dispatcher/issues/14
            'handler' => new class($this->queryErrorMessage) implements EventHandlerInterface {
                protected $msg;
                public function __construct($msg)
                {
                    $this->msg = $msg;
                }
                public function fire(EventContextInterface $context)
                {
                    throw new \LogicException(sprintf($msg, $context->get('sql'));
                }
            },
            'on' => [
                'database.query',
                'database.preparedQuery'
            ]
        ]);

        $this->booted = true;
    }

    /**
     * @param string $msg
     * @return self
     */
    public funciton setQueryErrorMessage(string $msg)
    {
        $this->queryErrorMessage = $msg;
        return $this;
    }
}
