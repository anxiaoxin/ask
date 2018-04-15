<?php
namespace app\index\controller;

class Answer {

    public function getAnswerList() {

        $pageSize = 1;
        $page = input('param.page');
        $questionId = input('param.questionId');
        $answerModel = db('Answer');
        $startRow = ($page-1) * $pageSize;

        $data = $answerModel -> field('id, user_id, question_id, abstract, create_time') -> where('question_id', $questionId) ->order('id', 'desc') -> limit($startRow, $pageSize) -> select();

        foreach ($data as $key => $item) {
            $data[$key]['userinfo'] = db('User') -> where('openid', $item['user_id']) -> field('userinfo') ->find()['userinfo'];
            $data[$key]['liked'] = db('Liked') -> where('id', $item['id']) -> count();
        }

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

    public function getAnswerContent() {

        $questionModel = db("Question");
        if(input('?param.id')){
            $id = input('param.id');
            $data = $questionModel -> field('background') -> where('id', $id) -> find();
            
        }
        else{
            $data = $questionModel -> field('background') -> order('id', 'desc') -> find();
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
}
