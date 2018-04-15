<?php
namespace app\index\controller;

class Question {

    public function getQuestionInfo() {

        $data = db("Question") ->field("id, pic_text, title, abstract, create_time, user_id") -> order("id", "desc") -> find();

        if($data === NULL){
            return [
                "code" => 1,
                "data" => "get question info error"
            ];
        }

        return [
            "code" => 0,
            "data" => $data
        ];
    }

    public function getQuestionBackground() {

        $questionModel = db("Question");
        if(input('?param.id')){
            $id = input('param.id');
            $data = $questionModel -> field('title, background, create_time, user_id') -> where('id', $id) -> find();
            
        }
        else{
            $data = $questionModel -> field('title, background, create_time, user_id') -> order('id', 'desc') -> find();
        }

        if($data === NULL){
            return [
                "code" => 1,
                "data" => "get question background error"
            ];
        }

        return [
            "code" => 0,
            "data" => $data
        ];
    }

    public function save() {

        $data['background'] = input('param.background');
        $data['title'] = input('param.title');
        $data['pic_text'] = input('param.picText');
        $data['user_id'] = input('param.openid');
        $data['create_time'] = date('Y-m-d H:i:s');
        $data['abstract'] = input('param.background');

        if($data['title'] && $data['background'] && $data['pic_text']) {

            db('Question') -> insert($data);
            return [
                'code' => 0,
                'data' => $data
            ];
        }

        return [
            'code' => 1,
            'data' => 'invalid parameter'
        ];
    }
}
