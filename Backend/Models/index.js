const fs = require('fs');
const Sequelize = require('sequelize')

let sequelize = new Sequelize('feedbackDB', 'root', '1234', { dialect: 'mysql'});
let db = {}

//verify the contents of the directory
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') 
  {
    let keyName = file.split('.')[0].split('-')[0]
    keyName = keyName[0].toUpperCase() + keyName.slice(1, keyName.length)
    let moduleName = file.split('.')[0]
    db[keyName] = sequelize.import(moduleName)
  }
})

// defining 1 to many relations for the database
db.Group.hasMany(db.Student)
db.Professor.hasMany(db.Activity) 
db.Student.hasMany(db.Feedback)     

module.exports = db