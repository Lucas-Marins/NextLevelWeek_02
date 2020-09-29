import express, { response } from 'express';

const app = express();

app.use(express.json())

app.post('/', (req,res)=>{
    return response.json({message:'Hello world'})
})


app.listen(3333);