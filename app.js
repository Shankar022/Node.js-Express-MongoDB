const express = require('express');
const fs = require('fs');

const app = express();

// app.get('/',(req,res) =>{
//     res.status(200).json({message:'Hello from the sever side...'});
// })
//
// app.post('/',(req , res) =>{
//     res.json({message:'Hello from the sever side...'});
// })

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })

})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}....`);
})

