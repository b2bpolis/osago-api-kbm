<?php
define('IT_HOST', 'http://enter.b2bpolis.ru');
define('OPTIONS_REQUEST', $_SERVER['REQUEST_METHOD'] === 'OPTIONS');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: access-control-allow-origin, cache-control, x-itform-forward');


//polyfill for nginx
if (!function_exists('getallheaders')) {
    function getallheaders()
    {
        $headers = '';
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
        return $headers;
    }
}


class ItException extends Exception
{

}
