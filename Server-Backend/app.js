const express = require('express');
const app = express();
;
const bodyParser = require('body-parser'); 
const morgan = require('morgan');
const Sequelize = require('sequelize');
const routes = require('./api/routes')
const DB_USERNAME = 'root'
const DB_PASSWORD = '1234'
const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'proiectfinal',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: false
})

app.use(morgan('dev'));
app.post('/create', async(req, res, next) => {
    try{
        await sequelize.sync({force: true});
        res.status(201).json({message: "created"})
    } catch( err){
        next(err)
        res.status(500).json({message: "Internal server error"})
    }
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, X-Requested-With, Authorization');
    if (req.method === 'OPTIONS') 
    {
        res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE');
    }
    next();
}) 

app.use('/student-api', routes.student)
app.use('/professor-api', routes.professor)
app.use('/activity-api', routes.activity)
app.use('/group-api', routes.group)
app.use('/feedback-api', routes.feedback)

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
