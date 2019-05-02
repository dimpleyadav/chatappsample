

var express=require('express');
var app=express();
var fs=require('fs');
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/"+"login.html");
})

app.get('/angular',function(req,res){
    var response ={"name":req.query.Name}
    console.log(response);
    var string=JSON.stringify(response);
    var obj=JSON.parse(string);
   res.send(obj.name);
     
     


})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })