const express = require('express');

module.exports = function(sequelize, DataTypes) {
    var Feedback = sequelize.define('feedback', 
    {
        timeStamp : 
        {
            type : DataTypes.STRING,
            allowNull : false
        },
        
        idActivity : 
        {
          type : DataTypes.STRING,
          allowNull : false
        },
        
        emoji : 
        {
            type : DataTypes.STRING,
            allowNull : false
            }
        
    }, 
    {
    timestamps : false
});
    
    return Feedback;
}