<?php
require_once dirname(dirname(__FILE__)).'/vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

interface AuthSettings
{
    function setUpAuth($mail);
}

class MailFactory
{
    /**
     * @var AuthSettings;
     */
    private $authSettings;

    function __construct($authSettings)
    {
        $this->authSettings = $authSettings;
    }

    function createMail()
    {
        $mail = new PHPMailer();
        $this->authSettings->setUpAuth($mail);
        return $mail;
    }
}
