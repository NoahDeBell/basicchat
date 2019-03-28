import express from 'express';
import db from './db/db.js';
import c from './db/c.js';

const app = express();

app.get('/api/v1/db', (req ,res)=>{
    res.status(200).send({
        succes: 'true',
        message: 'db is retrieved',
        database: db
    })
});
app.get('/api/v1/c',(req,res)=>{
    res.status(200).send({  
        returnFromC : c
    })
});

const PORT = 5000; 

app.listen(PORT, ()=>{
    console.log(`port running on ${PORT}`);
    // console.log(app);
});