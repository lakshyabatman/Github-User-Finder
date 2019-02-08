const express= require('express');

const app= express();
app.use(express.static(__dirname + "/public"));
app.get("/",(res,req)=>{
    res.render('index.html');
})
const port=process.env.PORT || 4000
app.listen(port,function(){
    console.log("Server started at Port ",port)
})