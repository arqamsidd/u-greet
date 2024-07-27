<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use TusPhp\Tus\Server as TusServer;
use TusPhp\Cache\RedisStore;
use Illuminate\Support\Facades\Log;

class TusServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('tus-server', function ($app) {
            $server = new TusServer('redis');
            $server->setApiPath('/api/tus')->setUploadDir(storage_path('app/tus_cache'));;
            return $server;
        });
    }

    // public function register()
    // {
    //     $this->app->singleton('tus-server', function ($app) {
    //         $server = new TusServer('redis');
            
    //         $uploadDir = storage_path('app/public/tus_uploads');

    //         if (!is_dir($uploadDir)) {
    //             mkdir($uploadDir, 0755, true);
    //         }

    //         $server
    //             ->setApiPath('/api/tus'); // tus server endpoint.
    //         $server->setUploadDir($uploadDir); // uploads dir.

    //         Log::info('Directory: '. $server->getUploadDir());
    //         return $server;
    //     });
    // }

    public function boot()
    {
        //
    }
}
