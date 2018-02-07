const express=reqiure('express');
const bodyParser=require('bodyParser');

const app=express();

app.use(bodyParser.json());

const port=9000;

app.listen(port,()=>{console.log(`ITS OVER ${port}`)});