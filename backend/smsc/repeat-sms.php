<?php

header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

//header("Access-Control-Request-Headers: *");
//header("Access-Control-Allow-Methods: POST, OPTIONS");
//header("Access-Control-Allow-Credentials: true");
//header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//header('Access-Control-Allow-Headers: access-control-allow-origin, cache-control, x-itform-forward');

session_start();
require ('../smsc-library/smsc_api.php');

if(isset($_SESSION["verifyCode"])) {
  send_sms($_SESSION["phone_no"], 'Ваш пароль: ' . $_SESSION["verifyCode"]);
  echo 'Код проверки был <b>повторно</b> отправлен на ваш номер.';
} else {
echo 'Нажмите сначала на кнопку <b>"Получить код"</b>';
};
