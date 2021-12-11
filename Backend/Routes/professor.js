const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')

// get request to /professors => a json array with all the professors
router.get('/professors', async(req, res, next) => {
   try {
       let professors = await models.Professor.findAll();
       res.status(200).json(professors);
   } catch (err) 
   {
       next(err);
   }
});

// post request to /professors/add => add a new professor
router.post('/professors/add', async(req, res, next) => {
    try {
        let professor = await models.Professor.create(req.body);
        res.status(200).json({message : 'OK: created!'});
    } catch (err) 
    {
        next(err);
    }
});

// get request to /professor-api/professors/:pid => professor by id
router.get('/professors/:pid', async (req, res, next) => {
    try {
        let professor = await models.Professor.findByPk(req.params.pid);
        if (professor) 
        {
            res.status(200).json(professor);
        } else 
        {
            res.status(404).json({message: 'ERROR: not found'})
        }
    } catch (err) 
    {
        next(err);
    }
});

// get request to /professor-api/professors/:pid/activities => a json array with a professor's activities
router.get('/professors/:pid/activities', async(req, res, next) => {
   try {
       let professor = await models.Professor.findByPk(req.params.pid, {include : [models.Activity]});
       
       if (professor) 
       {
           res.status(200).json(professor.activities); 
       } else 
       {
           res.status(404).json({message : 'ERROR: not found!'});
       }
   } catch (err) 
   {
       next(err);
   }
});

// post request to /professor-api/professors/:pid/activities/add => create an activity and bond it with a professor by id
router.post('/professors/:pid/activities/add', async(req, res, next) => {
   try {
       let professor = await models.Professor.findByPk(req.params.pid);
       
       if (professor) 
       {
           let activity = req.body;
           activity.professorId = professor.id;
           await models.Activity.create(activity);
           
          res.status(200).json({message : 'OK: created!'});
       } else 
       {
           res.status(404).json({message : 'ERROR: not found'});
       }
   } catch (err) 
   {
       next(err);
   }
});

module.exports = router;