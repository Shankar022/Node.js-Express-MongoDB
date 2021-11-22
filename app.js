const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.status(200).json({message:'Hello from the sever side...'});
})

app.post('/',(req , res) =>{
    res.json({message:'Hello from the sever side...'});
})

const port = 3000;
app.listen(port, () =>{
    console.log(`App running on port ${port}....`);
})

