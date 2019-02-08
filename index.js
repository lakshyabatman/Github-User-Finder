const express= require('express');

const app= express();
app.use(express.static(__dirname + "/public"));
app.get("/",(res,req)=>{
    res.render('index.html');
})

app.listen(4000,()=>{
    console.log("app is running");
})