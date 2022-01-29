const router = require('express').Router();
const db = require('../models/index.js');

router.get('/', (req, res) => {
    db.Parties.find({})
    .populate('posts')
    .exec((err, foundParty) => {
        if (err) return console.log(err);
        res.json(foundParty);
        console.log('so far so goooooood')
    })
})

router.get('/:id', (req, res) => {
    db.Parties.findById(req.params.id)
    .populate('posts')
    .exec((err, foundParty) => {
        if(err) return console.log(err);

        res.json(foundParty)
    }) 
})

router.post('/', (req, res) => {
    db.Parties.create(req.body, (err, createdParty) => {
        if (err) return console.log(err)
        
        res.json(createdParty)
    })
})

router.put('/:id', (req, res) => {
    db.Parties.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedParty) => {
            if (err) return console.log(err)

            res.json(updatedParty)
        }
    )
})

router.delete('/:id', (req, res) => {
    db.Parties.findByIdAndDelete(req.params.id, (err, deletedParty) => {
        if (err) return console.log(err)
        console.log('Deleted Party')
        res.json({message: 'Deleted'})
    })
})
module.exports = router;