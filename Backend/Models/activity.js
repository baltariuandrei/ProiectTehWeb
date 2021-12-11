const express = require('express');

module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define('activity', 
    {
        name : 
        {
            type : DataTypes.STRING,
            allowNull : false,
            validate : 
            {
                len : [3, 45]
            }
        },
        
        startDate : 
        {
            type : DataTypes.DATE,
            allowNull : false
        },
        
        endDate : 
        {
            type : DataTypes.DATE,
            allowNull : false
        },
        
        countEmoji1 : 
        {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : 
            {
                isInt : true,
                min : 0
            }
        },
        
        countEmoji2 : 
        {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : 
            {
                isInt : true,
                min : 0
            }
        },
        
        countEmoji3 : 
        {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : 
            {
                isInt : true,
                min : 0
            }
        },
        
        countEmoji4 : 
        {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : 
            {
                isInt : true,
                min : 0
            }
        }
    }, {
    timestamps : false
});
    
    return Activity;
}