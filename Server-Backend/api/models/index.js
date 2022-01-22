'use strict'
const fs = require('fs');
const Sequelize = require('sequelize')

const DB_USERNAME = 'root'
const DB_PASSWORD = '1234'
const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'proiectfinal',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: false
})


let db = {}
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    let keyName = file.split('.')[0].split('-')[0]
    keyName = keyName[0].toUpperCase() + keyName.slice(1, keyName.length)
    let moduleName = file.split('.')[0]
    db[keyName] = sequelize.import(moduleName)
  }
})

db.Group.hasMany(db.Student)
db.Professor.hasMany(db.Activity)
db.Student.hasMany(db.Feedback)
module.exports = db