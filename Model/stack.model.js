const db=require('../db.connection');

var stack={
    getAllQuestions(callback){
        return db.query("select questions,answer from stack",callback);
    },
    getQuestionByKeyWord(word,callback){
        var query="select questions,answer from stack where questions LIKE '%"+word+"%' ORDER BY Q_ID DESC";
        return db.query(query,[word],callback);
    }

}

module.exports=stack;