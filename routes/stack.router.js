const express=require('express');
const router=express.Router();
const stack=require('../Model/stack.model');

router.get("/",function(req,res,next){
    stack.getAllQuestions(function(err,result){
        if(err)
            res.json("Error From BackEnd");
        else    
            res.json(result);
    })
});

router.get("/:word",function(req,res,next){
    if(req.params.word){
        stack.getQuestionByKeyWord(req.params.word,function(err,result){
            if(err)
                res.json(err);
            else
                res.json(result);
        })
    }
    else{
        res.json("No Key word");
    }

})

module.exports=router;