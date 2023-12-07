<?php
/**
 * Created by PhpStorm.
 * User: Sagar
 * Date: 9/27/2022
 * Time: 4:31 PM
 */

/* file : config/constants.php */

@define('BASE_URL',env('APP_URL', 'https://app.u-greet.com')."/");/* define base url */
//if(!defined('ADMIN_BASE_URL')) 
@define('ADMIN_BASE_URL', BASE_URL."admin/");/* admin define base url */