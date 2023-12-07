<?php

use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

if (!function_exists('dbDate')) {
    function dbDate($date)
    {
        return date("Y-m-d", strtotime($date));
    }
}

if (!function_exists('displayDate')) {
    function displayDate($date)
    {
        return date("d-m-Y", strtotime($date));
    }
}

if (!function_exists('displayDateTime')) {
    function displayDateTime($date)
    {
        return date("d-m-Y H:i:s", strtotime($date));
    }
}
if (!function_exists('displayTime')) {
    function displayTime($date)
    {
        return date("H:i:s", strtotime($date));
    }
}
if (!function_exists('displayMeetTime')) {
    function displayMeetTime($sdate, $edate)
    {
        return date("H", strtotime($sdate)).' - '.date("H", strtotime($edate));
    }
}

if (!function_exists('getRandomString')) {
    function getRandomString ($length) {
        return str_random($length);
    }
}


if (!function_exists('encriptData')) {
    function encryptData($data) {
        return base64_encode($data);
    }
}

if (!function_exists('decryptData')) {
    function decryptData($data) {
        return base64_decode($data);
    }
}


if (!function_exists('encryptId')) {
    function encryptId($id) {
        return encrypt($id);
    }
}

if (!function_exists('decryptId')) {
    function decryptId($id) {
        return decrypt($id);
    }
}
