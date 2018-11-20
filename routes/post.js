const express = require('express')
const router = express.Router()
const Post = require('../models/Post')



router.get('/', async (reg, res) => {

    const posts = await Post.find({})
    res.status(200).json(posts)
    
})


router.post('/', async (reg, res) => {

    const postData = {
        title: reg.body.title,
        text: reg.body.text
    }
    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)
})



router.delete('/:postId', async (reg, res) => {

   await Post.remove({_id:reg.params.postId})
    res.status(200).json({
        message: 'Post Deleted'
    })
    
    
})



module.exports = router
