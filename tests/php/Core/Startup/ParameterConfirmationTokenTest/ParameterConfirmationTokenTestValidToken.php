<?php

namespace SilverStripe\Core\Tests\Startup\ParameterConfirmationTokenTest;

/**
 * A token that always validates a given token
 */
class ParameterConfirmationTokenTestValidToken extends ParameterConfirmationTokenTestToken
{

    protected function checkToken($token)
    {
        return true;
    }
}
