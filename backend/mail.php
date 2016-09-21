<?php
require_once 'src/init.php';
if (OPTIONS_REQUEST)
    exit(0);

require_once 'settings.php';
require_once 'src/mail.classes.php';

class FnCalledAuthSettings implements AuthSettings
{
    /**
     * @param $mail PHPMailer
     */
    function setUpAuth($mail)
    {
        if (function_exists('IsSetAuth'))
            ItSetAuth($mail);
        else
            $mail->isMail();
    }
}

$authSettings = new FnCalledAuthSettings();
$mailFactory = new MailFactory($authSettings);

#$json = json_decode(file_get_contents('php://input'));
#ItSetUpMailData($json);

$mail = $mailFactory->createMail();
ItSetUpMail($mail);
ItSetUpBody($_POST, $mail);
ItSetUpAttachments($_FILES, $mail);

echo ($mail->send()) ?  'sent' : 'error';

if (ITFORM_DEBUG)
{
    echo "<pre>";
    var_dump($mail);
    echo "</pre>";
}
