const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')

// get request to /activities => a json array with all the activities
router.get('/activities', async(req, res, next) => {
   try {
       let activities = await models.Activity.findAll();
       res.status(200).json(activities);
   } catch (err) 
   {
       next(err);
   }
});

// post request to /activities/add => add a new activity
router.post('/activities/add', async(req, res, next) => {
    try {
        if (req.body.starDate > req.body.endDate) 
        {
            res.status(400).json({message : 'date not valid!'})
        } else 
        {
            let activity = await models.Activity.create(req.body);
            res.status(200).json({message : 'created!'});
        }
    } catch (err) 
    {
        next(err);
    }
});

// get request to /activity-api/:aid => get activity by id
router.get('/activities/:aid', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        if(activity){
            res.status(200).json(activity);
        }
        else{
            res.status(404).json({message : 'not found'})
        }
    } catch (err) 
    {
        next(err);
    }
});

// put request to /activities/:aid => update an existing activity
router.put('/activities/:aid', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) 
        {
            await activity.update(req.body);
            res.status(200).json({message : 'OK: update succesful!'})
        } else {
            res.status(400).json({message : 'ERROR: not found'})
        }
    } catch (err) 
    {
        next(err);
    }
})

// put request to /activities/:aid/updateCountEmoji1 => update an existing activity count for emoji1
router.put('/activities/:aid/updateCountEmoji1', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            let updated = 
            {
                "id" : activity.id,
                "name" : activity.name,
                "startDate" : activity.startDate,
                "endDate" : activity.endDate,
                "countEmoji1" : activity.countEmoji1 + 1,
                "countEmoji2" : activity.countEmoji2,
                "countEmoji3" : activity.countEmoji3,
                "countEmoji4" : activity.countEmoji4,
                "professorId" : activity.professorId
            }
            await activity.update(updated);
            res.status(200).json({message : 'OK: updated countEmoji1!'})
        } else {
            
            res.status(400).json({message : 'ERROR: not found'})
        }
    } catch (err) 
    {
        next(err);
    }
})

// put request to /activities/:aid/updateCountEmoji2 => update an existing activity count for emoji2
router.put('/activities/:aid/updateCountEmoji2', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) 
        {
            let updated = 
            {
                "id" : activity.id,
                "name" : activity.name,
                "startDate" : activity.startDate,
                "endDate" : activity.endDate,
                "countEmoji1" : activity.countEmoji1,
                "countEmoji2" : activity.countEmoji2 + 1,
                "countEmoji3" : activity.countEmoji3,
                "countEmoji4" : activity.countEmoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            res.status(200).json({message : 'OK: updated countEmoji2!'})
        } else {           
            res.status(400).json({message : 'ERROR: not found'})
        } 
    } catch (err) 
    {
        next(err);
    }
})

// put request to /activities/:aid/updateCountEmoji3 => update an existing activity count for emoji3
router.put('/activities/:aid/updateCountEmoji3', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            let updated = 
            {
                "id" : activity.id,
                "name" : activity.name,
                "startDate" : activity.startDate,
                "endDate" : activity.endDate,
                "countEmoji1" : activity.countEmoji1,
                "countEmoji2" : activity.countEmoji2,
                "countEmoji3" : activity.countEmoji3 + 1,
                "countEmoji4" : activity.countEmoji4,
                "professorId" : activity.professorId
            }
            await activity.update(updated);
            res.status(200).json({message : 'OK: updated countEmoji3!'})
        } else 
        {    
            res.status(400).json({message : 'ERROR: not found'})
        }
    } catch (err) 
    {
        next(err);
    }
})

// put request to /activities/:aid/updateCountEmoji4 => update an existing activity count for emoji4
router.put('/activities/:aid/updateCountEmoji4', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            let updated = 
            {
                "id" : activity.id,
                "name" : activity.name,
                "startDate" : activity.startDate,
                "endDate" : activity.endDate,
                "countEmoji1" : activity.countEmoji1,
                "countEmoji2" : activity.countEmoji2,
                "countEmoji3" : activity.countEmoji3,
                "countEmoji4" : activity.countEmoji4 + 1,
                "professorId" : activity.professorId
            }
            await activity.update(updated);
            res.status(200).json({message : 'OK: updated countEmoji4!'})
        } else 
        {
            res.status(400).json({message : 'ERROR: not found'})
        }
    } catch (err) 
    {
        next(err);
    }
})

module.exports = router;