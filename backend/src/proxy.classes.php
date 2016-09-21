<?php

interface TokenSource
{
    function getToken();
}

class ItLogin implements TokenSource
{

    function __construct($login, $password)
    {
        $this->login = $login;
        $this->password = $password;
    }

    /**
     * receives authentication token from enter.b2bpolis.ru
     * @return string
     * @throws ItException
     */
    function getToken()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => IT_HOST . "/rest/v3/default/obtain-token",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "{\n    \"username\": \"" . $this->login . "\",\n  \"password\": \"" . $this->password . "\"\n\n}",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/json",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            var_dump($err);
            throw new ItException('can not obtain token from enter.b2bpolis.ru');
        }
        $response = json_decode($response);
        return $response->token;
    }
}

class ItTokenFileCache implements TokenSource
{
    private $source, $filePath, $cachedToken;

    function __construct(TokenSource $source, $filePath)
    {
        $this->filePath = $filePath;
        $this->source = $source;
    }

    function getToken()
    {
        if ($this->cachedToken) {
            return $this->cachedToken;
        }
        if (is_file($this->filePath)) {
            $token = file_get_contents($this->filePath);
            if (strlen($token) > 6) {
                // todo make token validation more robust
                $this->cachedToken = $token;
            }
        }
        if (!$this->cachedToken) {
            $this->cachedToken = $this->source->getToken();
            file_put_contents($this->filePath, $this->cachedToken);
        }
        return $this->cachedToken;
    }
}

class ItRequest
{
    private $url;
    private $method;
    private $data;

    private function __construct()
    {

    }

    public static function fromCurrentRequest()
    {
        $request = new ItRequest();
        if ($_SERVER["REQUEST_METHOD"] == 'POST') {
            $request->method = 'POST';
            $request->data = file_get_contents("php://input");
        } else if ($_SERVER["REQUEST_METHOD"] == 'GET') {
            $request->method = 'GET';
        } else {
            throw new ItException('only get and post methods are supported');
        }

        foreach (getallheaders() as $name => $value) {
            if (strtolower($name) == 'x-itform-forward') {
                $request->url = $value;
                break;
            }
        }

        if (isset($_GET['iturl'])) {
            $request->url = $_GET['iturl'];
        } else if (!$request->url) {
            throw new ItException('either proxy.php?iturl= or x-itform-forward header must contain url');
        }

        return $request;
    }

    /**
     * @return mixed
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @return mixed
     */
    public function getMethod()
    {
        return $this->method;
    }

    /**
     * @return mixed
     */
    public function getData()
    {
        return $this->data;
    }


}

class ItProxy
{
    private $token;

    function __construct(TokenSource $source)
    {
        $this->token = $source->getToken();
    }

    function forward(ItRequest $request)
    {
        $curl = curl_init();
        $authHeader = "Authorization: Token " . $this->token;
        curl_setopt_array($curl, array(
            CURLOPT_URL => IT_HOST . $request->getUrl(),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $request->getMethod(),
            CURLOPT_HTTPHEADER => array(
                $authHeader,
                "cache-control: no-cache",
                "content-type: application/json",
            ),
        ));

        if ($request->getMethod() === 'POST') {
            curl_setopt($curl, CURLOPT_POSTFIELDS, $request->getData());
        }

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            var_dump($err);
            throw new ItException('can not obtain token from enter.b2bpolis.ru');
        }

        return $response;
    }
}