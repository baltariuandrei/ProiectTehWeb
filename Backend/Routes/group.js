const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')

// get request to /groups => a json array with all the groups
router.get('/groups', async(req, res, next) => {
   try 
   {
       let groups = await models.Group.findAll();
       res.status(200).json(groups);
   } catch (err) 
   {
       next(err);
   }
});

// post request to /groups/add => using a json body add a group
router.post('/groups/add', async(req, res, next) => {
    try {
        let group = await models.Group.create(req.body);
        res.status(200).json({message : 'OK: created!'});
    } catch (err) 
    {
        next(err);
    }
});

// get request to /group-api/groups/:gid/students => a json array with all the students that are in a specified group
router.get('/groups/:gid/students', async(req, res, next) => {
   try {
       let group = await models.Group.findByPk(req.params.gid, {include : [models.Student]});
       
       if (group) 
       {
           res.status(200).json(group.students);
       } else
       {
           res.status(404).json({message : 'ERORR: not found!'});
       }
   } catch (err) 
   {
       next(err);
   }
});

// post request to /group-api/groups/:gid/student/add => create a student and link him with a group by a it's ID
router.post('/groups/:gid/student/add', async(req, res, next) => {
   try {
       let group = await models.Group.findByPk(req.params.gid);
       
       if (group) 
       {
           let student = req.body;
           student.groupId = group.id;
           await models.Student.create(student);
           
          res.status(200).json({message : 'OK: created!'});
       } else 
       {
           res.status(404).json({message : 'ERROR: not found!'});
       }
   } catch (err) 
   {
       next(err);
   }
});

module.exports = router;