<?php

namespace App\Providers;

use TusPhp\Tus\Server as TusServer;
use Illuminate\Support\ServiceProvider;
use TusPhp\Events\TusEvent;
use App\Http\Controllers\Api\GreetController;

class TusServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('tus-server', function ($app) {
            // Fetch Laravel's Redis configuration
            $redisConfig = config('database.redis.default');

            // Initialize TusPHP with Redis backend and Laravel's Redis config
            $server = new TusServer('redis', [
                'host' => $redisConfig['host'],
                'port' => $redisConfig['port'],
                'password' => $redisConfig['password'],
                'database' => $redisConfig['database'],
            ]);

            // Set the API path for the Tus server
            $server->setApiPath('/api/tus');

            // Add an event listener for 'upload.complete' to handle after the file is uploaded
            $server->event()->addListener('tus-server.upload.complete', function (TusEvent $event) {
                // Call the GreetController method and pass the event
                app(\App\Http\Controllers\Api\GreetController::class)->handleTusUploadComplete($event);
            });

            return $server;
        });
    }
}
