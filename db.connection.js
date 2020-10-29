const mysql=require('mysql');

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"demoquestion",
    multipleStatements:true

});

db.connect(function(err){
    if(err)
        throw err;
    else
        console.log("Connected to DataBase");
})

module.exports=db;