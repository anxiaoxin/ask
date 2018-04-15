<?php
namespace app\index\model;

use think\Model;
use wx\Conf;

class User extends Model {

    public function login($data) {
    	$lastData = $this -> where(["openid" => $data["openid"]]) -> find();
    	$data["last_login_time"] = date("Y-m-d H:i:s");

    	if($lastData === NULL){
    		$this -> insert($data);
    	}
    	else{
    		$this -> update($data);
    	}
        
    }

    public function checkLogin($skey) {

    	$data = $this -> where("skey", $skey) -> find();

    	if($data === NULL) {
    		return false;
    	}

    	if(time() - strtotime($data["last_login_time"] > Conf::getWxLoginExpires())) {
    		return false;
    	}

    	return true;

    }
}
