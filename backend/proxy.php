<?php
require_once 'src/init.php';
if (OPTIONS_REQUEST) {
    exit(0);
}

require_once 'settings.php';
require_once 'src/proxy.classes.php';

try {
    $credentials = new ItLogin(ITFORM_LOGIN, ITFORM_PASSWORD);
    $cache = new ItTokenFileCache($credentials, ITFORM_TOKEN_FILE);
    $proxy = new ItProxy($cache);
    echo $proxy->forward(ItRequest::fromCurrentRequest());
} catch (Throwable $e) {
    echo json_encode(array("error" => $e->getMessage()));
}