<?php
header('Access-Control-Allow-Origin: *');

session_start();

if(isset($_POST['code']))
{
    if(!isset($_SESSION["verifyCode"]))
    {
      echo "Сначала нажмите кнопку <b>Получить Код</b>";
    }
    elseif ($_SESSION["verifyCode"] == $_POST['code'])
    {
      echo "Код проверки верный!";
    }
    else
    {
      echo "Код проверки <b>не</b> правильный.";
    }
}
