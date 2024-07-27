<?php

require __DIR__ . '/../vendor/autoload.php';

use TusPhp\Tus\Server as TusServer;
use TusPhp\Cache\FileStore;
use Illuminate\Support\Facades\Log;


Log::info('TDir: ');

$server = new TusServer();

// Set a specific cache directory
$cacheDir = storage_path('app/tus_cache');
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0777, true);
}

$uploadDir = storage_path('app/public/tus_uploads');
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$server->setCache(new FileStore($cacheDir));
$server->setApiPath('/api/tus');
$server->setUploadDir($uploadDir);

Log::info('TDir: '. $server->getUploadDir());

// Middleware to handle the upload directory
$server->middleware()->add(function ($request, $response) use ($server) {
    $greetId = $request->getHeader('greet-id')[0] ?? null;
    $userId = $request->getHeader('user-id')[0] ?? null;

    if (!$greetId || !$userId) {
        return $response->setStatus(400)->setBody(['error' => 'greet-id and user-id headers are required']);
    }

    $uploadDir = storage_path("app/public/greetMedia/uploads/{$greetId}");
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $server->setUploadDir($uploadDir);

    return $response;
});

// Serve the file and ensure the Upload-Offset header is set
$response = $server->serve();

if ($response->getStatusCode() === 200 && $server->getRequest()->getMethod() === 'HEAD') {
    $fileId = $server->getRequest()->getFileId();
    $client = $server->getCache()->getClient();
    $offset = $client->getOffset($fileId);

    if ($offset !== false) {
        $response->headers->set('Upload-Offset', $offset);
    } else {
        $response->headers->set('Upload-Offset', '0'); // Default to 0 if offset is not found
    }
}

$response->send();
exit(0);
