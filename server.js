//PENTRU TESTARE -> PRIMA OARA node server.js    DUPA npm start

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dbProduse from './Components/dbConfig.js';
import { DB_USERNAME, DB_PASSWORD } from './Components/dbConfig.js';
import Produse from './Components/Entities/Produse.js'
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);


///
let conn;
mysql.createConnection(
    {
        user: DB_USERNAME,
        password: DB_PASSWORD    
    }
)
.then(connection => 
    {
        conn = connection;
        return connection.query("CREATE DATABASE IF NOT EXISTS Produse")
    })
.then(() => 
{
    return conn.end();
})
.catch( err => 
    {
        console.warn(err.stack);
    })

router.route('/create').get(async(req, res) => 
{
    try 
    {
        await dbProduse.sync();
        res.status(201).json({message: "created"})
    } catch(err)
    {
        console.warn(err.stack);
        res.status(500).json({message: "Internal server error"})
    }
})

let port = process.env.PORT || 8000;
app.listen(8000);
console.log(`API is running at ${port}`);