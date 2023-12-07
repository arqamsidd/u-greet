<?php

// Execute the "ffprobe -version" command using shell_exec
$version = shell_exec('ffprobe -version 2>&1');

// Check if the command returned a valid ffprobe version
if (strpos($version, 'ffprobe version') !== false) {
    // Extract and print the version
    preg_match('/ffprobe version (\S+)/', $version, $matches);
    $ffprobeVersion = $matches[1];
    echo "ffprobe version: $ffprobeVersion";
} else {
    echo "ffprobe is not installed or not found.";
}

?>

