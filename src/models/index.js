'use strict'
const foodSchema = require('./food.model')
const clothesSchema = require('./clothes.model')
const {Sequelize ,DataTypes}=require('sequelize')

const postgres_url=process.env.NODE_ENV==='test'?'sqlite:memory:':process.env.DATABASE_URL
const sequelizeOptions=process.env.NODE_ENV==='production'?{ssl:{require:true,rejectUnauthorized:false}}:{}

let sequelize = new Sequelize(postgres_url,sequelizeOptions);

const foodModel = foodSchema(sequelize,DataTypes)
const clothesModel = clothesSchema(sequelize,DataTypes)


module.exports={
    db:sequelize,
    foodModel:foodModel,
    clothesModel:clothesModel
};