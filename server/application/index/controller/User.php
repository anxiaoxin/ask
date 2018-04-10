<?php
namespace app\index\controller;

use wx\auth\LoginService;

class User
{
    public function login()
    {
    	return LoginService::login();
        return ['login' => true];
    }
}
