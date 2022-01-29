const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const City = require('./Cities')


const postSchema = new Schema ({
    title: String,
    content: String,
    img: String,
    partyId: { type:mongoose.Types.ObjectId, ref: 'Parties'}
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post