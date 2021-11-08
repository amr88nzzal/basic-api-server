'use strict';

const express = require('express')
const {foodModel} = require('../models/index')
const foodRouter = express.Router();
//-------------------
foodRouter.get('/food',getAllFood);
foodRouter.get('/food/:id',getOneFood);
foodRouter.post('/food',creatFood);
foodRouter.put('/food/:id',updateFood);
foodRouter.delete('/food/:id',deleteFood);
//--------------------

async function getAllFood(req,res){
    const allFood = await foodModel.findAll()
    res.status(200).json(allFood) 
}

async function getOneFood(req,res){
    const id = parseInt(req.params.id)
    const oneFood = await foodModel.findOne({
            where:{
                id}})
    res.status(200).json(oneFood) 
}

async function creatFood(req,res){
    const newFood = req.body;
    console.log(newFood)
    const addFood = await foodModel.create(newFood)
res.status(201).json(addFood) 

}
async function updateFood(req,res){
const id =parseInt(req.params.id);
const food = req.body;
const foundFood = await foodModel.findOne({where:{id}});
const updateFood = await foundFood.update(food)
res.status(201).json(updateFood) 
}
async function deleteFood(req,res){
    const id =parseInt(req.params.id);
    const deleteFood = await foodModel.destroy({where:{id}});
    res.status(204).json(deleteFood) 

}


module.exports = foodRouter