const express = require('express');
const app = express();
//dsj

app.get('/',(req,res)=>res.send('API Running'));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server has started on port ${PORT}`));