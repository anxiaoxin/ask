<?php
namespace app\index\controller;

use wx\auth\LoginService;
use wx\Conf;
use wx\Constants;

class User {
    public function login() {

    	list($loginState, $data) = array_values(LoginService::login());
    	$userModel = model("User");
    	if($loginState === Constants::S_AUTH){
    		$userModel -> login($data);
    		return [
    			"loginState" => Constants::S_AUTH,
    			"skey" => $data["skey"]
    		];
    	}

    	return [
    		"loginState" => $loginState,
    		"error" => $data
    	];

    }

    public function checkLogin() {

    	if(model("User") -> checkLogin()) {
    		return [
    			"loginState" => Constants::S_AUTH
    		];
    	}

    	return [
    		"loginState" => Constants::E_AUTH
    	];
    }
}
