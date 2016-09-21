<?php
header('Access-Control-Allow-Origin: *');

//header("Access-Control-Request-Headers: *");
//header("Access-Control-Allow-Methods: POST, OPTIONS");
//header("Access-Control-Allow-Credentials: true");
//header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//header('Access-Control-Allow-Headers: access-control-allow-origin, cache-control, x-itform-forward');

  session_start();
  require ('../smsc-library/smsc_api.php');

  if(isset($_POST['phone_no']))
  {
    $_SESSION["phone_no"] = $_POST['phone_no'];
    $_SESSION["verifyCode"] = rand(1000, 9999);

    send_sms($_SESSION["phone_no"], 'Ваш пароль: ' . $_SESSION["verifyCode"]);
    echo 'Код проверки <b>отправлен</b> на Ваш номер.';
  } else {
    echo 'Введите номер';
  }

//    var_dump($_SESSION["verifyCode"]);
