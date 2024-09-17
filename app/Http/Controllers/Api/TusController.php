<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use TusPhp\Tus\Server as TusServer;

class TusController extends Controller
{
    /**
     * Handle TUS file upload.
     */
    public function tusGreetUpload(Request $request)
    {
        // Access the TUS server instance
        $server = app('tus-server');

        // Get the incoming request and extract metadata
        $metadata = $request->headers->get('Upload-Metadata');

        // Parse metadata (base64 decode it)
        if ($metadata) {
            $metadataArray = explode(',', $metadata);
            $metadataMap = [];
            foreach ($metadataArray as $meta) {
                $parts = explode(' ', $meta);
                if (count($parts) === 2) {
                    $metadataMap[$parts[0]] = base64_decode($parts[1]);
                }
            }

            // Use the metadata to set the dynamic upload directory
            $greetId = $metadataMap['greet_id'] ?? 'default';
            $uploadDir = Storage::disk('greet_media_uploads')->path($greetId);

            // Ensure the directory exists
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            // Set the dynamic upload directory for the server
            $server->setUploadDir($uploadDir);

            Log::info('Setting dynamic upload directory to: ' . $uploadDir);
        }

        // Serve the TUS server to handle the request
        return $server->serve();
    }
}
