
import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import  dotenv from 'dotenv'
import path from 'path'
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.urlencoded({extended:true}))


dotenv.config()
const __dirname = path.resolve()

mongoose.connect('mongodb+srv://'+(process.env.DATABASE_USER)+':'+(process.env.DATABASE_KEY)+'@flicks-database.rd5f0az.mongodb.net/flicks_database?retryWrites=true&w=majority')

const stream_service = new mongoose.model('stream_service', {company:Array})
const trailer = new mongoose.model('trailer', {trailers:Array})


// let trailerURL = new trailer({trailers:{trailerURL:process.env.TRAILER_ENDPOINT+'o3xweOacwnM',id:0}})
// trailerURL.save()

// let service = new stream_service({company:{service:process.env.TMDB_ENDPOINT+'/zxrVdFjIjLqkfnwyghnfywTn3Lh.jpg',id:'1'}})
// service.save()

// stream_service.findByIdAndUpdate('63d5709d016fadeb5c045006',{$push:{company:
//     {service:process.env.TMDB_ENDPOINT+'/eWp5LdR4p4uKL0wACBBXapDV2lB.jpg',id:'8'},
// }},
    
//     (err,data)=>{
//     console.log(err)
// });

// trailer.findByIdAndUpdate('63d64d5d9280b79c4562f464',{$push:{trailers:
//     {trailerURL:process.env.TRAILER_ENDPOINT+'qZVTkn2NjS0',id:5}
// }},
//     (err,data)=>{
//     console.log(err)
// });
 
app.get('/', (req, res) => {
    res.send("API SERVER IS RUNNING")
});

app.get('/platform', (req, res) => {
    stream_service.find({},(err,result)=>{
        res.send(result)
    });
});

app.get('/trailer', (req, res) => {
    trailer.find({},(err,result)=>{
        res.send(result)
    });
});

app.get('/admin', (req, res) => {
    app.use(express.static('public'))
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/admin', (req, res) => {
    res.send('posted')
    console.log(req.body.addTrailer)
});
app.delete('/admin', (req, res) => {
    res.send('deleted')
    console.log(req.headers.trailertoremove)
});

app.listen(5000,()=>{
    console.log("server started");
});

