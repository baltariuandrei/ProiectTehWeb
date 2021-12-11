const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')

// get request to /feedback => json array with all the feedbacks
router.get('/feedbacks', async(req, res, next) => {
    try {
        let feedbacks = await models.Feedback.findAll();
        res.status(200).json(feedbacks);
    } catch (err) 
    {
        next(err);
    }
})

// post request to /feedback/add => add a new feedback
router.post('/feedback/add', async(req, res, next) => {
    try {
        await models.Feedback.create(req.body);
        res.status(200).json({message : 'OK: created'})
    } catch (err) 
    {
        next(err);
    }
})

// get request to /feedback/:aid => json array with feedback for a specific activity
router.get('/feedback/:aid', async(req, res, next) => {
    try {
        let feedbacks = await models.Feedback.findAll()
        let selectedFeedback = []
        feedbacks.forEach(fdb => {
            if (fdb.idActivity == req.params.aid) 
            {
                selectedFeedback.push(fdb)
            }
        })
        res.status(200).json(selectedFeedback)
    } catch (err) 
    {
        next(err)
    }
})

module.exports = router;