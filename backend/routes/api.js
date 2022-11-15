



// module.exports=router;

const express = require('express')
// const { findById } = require('../models/student')
const router = express.Router() //routing function
const DATA = require('../models/blog') // DB of student





// students full list read 
router.get('/bloglist', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})


//  add 

router.post('/blog', async (req, res) => {
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

router.delete('/blog/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deleteblog = await DATA.findByIdAndDelete(id)
        res.send(deleteblog)


    } catch (error) {
        console.log(error)

    }
})


// update 


router.put('/blog', async (req, res) => {
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


router.get('/blog/:id', async (req, res) => {
    try {

        let id = req.params.id
        const singleblog = await DATA.findById(id)
        res.send(singleblog)

    } catch (error) {
        console.log(error)

    }
})







module.exports = router