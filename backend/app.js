


const express = require('express')
const cors = require('cors')
const logger = require('morgan') // for seeing api calls in terminal

const app = new express()


// require('dotenv').config()

// require('./middlewares/mongoDB') //to init mongoDB
// const DATA = require('../models/blog')

app.use(cors()) //to connect frontend and backend without any disturbance
app.use(express.json()) // to recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))




const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    placename: {
        type: String,
        required: true
    },
    follow: {
        type: Number,
        required: true
    },
    articlecontent: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})


let blogDATA = mongoose.model('article', blogSchema)


mongoose.connect("mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/Article?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})

const router = express.Router() //routing function


// students full list read 
// router.get('/api/bloglist', async (req, res) => {

//     try {

//         const list = await DATA.find()
//         res.send(list)


//     } catch (error) {
//         console.log(error)
//     }

// })


//  add 

router.post('/api/blog', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            placename: req.body.placename,
            follow: req.body.follow,
            articlecontent:req.body.articlecontent,
            comment:req.body.comment,
            date:req.body.date
        }


        const newblog = new DATA(item) //to check incoming data
        const saveblog = await newblog.save() //mongoDB save

        res.send(saveblog)


    } catch (error) {

        console.log(error)
    }
})


// delete 

// router.delete('/api/blog/:id', async (req, res) => {
//     try {
//         let id = req.params.id
//         const deleteblog = await DATA.findByIdAndDelete(id)
//         res.send(deleteblog)


//     } catch (error) {
//         console.log(error)

//     }
// })


// update 


router.put('/api/blog', async (req, res) => {
    try {

        let id = req.body.id
        let item = {  //to fetch and save data from front end in server
            placename: req.body.placename,
            follow: req.body.follow,
            articlecontent:req.body.articlecontent,
            comment:req.body.comment,
            date:req.body.date
        }
        let updateData = { $set: item }
        let updateblog = await DATA.findByIdAndUpdate({ 'id': id }, updateData)
        res.send(updateblog)
    } catch (error) {
        console.log(error)

    }
})


// Single  detail 


// router.get('/api/blog/:id', async (req, res) => {
//     try {

//         let id = req.params.id
//         const singleblog = await DATA.findById(id)
//         res.send(singleblog)

//     } catch (error) {
//         console.log(error)

//     }
// })





//api

// const api = require('./routes/api')
// app.use('/api',api)


var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`...........Server running at ${PORT}.............`)
})

const path = require('path');
app.use(express.static(path.join(__dirname+'/dist/frontend/index.html')));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));});
