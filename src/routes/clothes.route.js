'use strict';

const express = require('express')
const {clothesModel} = require('../models/index')
const clothesRouter = express.Router();
//-------------------
clothesRouter.get('/clothes',getAllClothes);
clothesRouter.get('/clothes/:id',getOneClothes);
clothesRouter.post('/clothes',creatClothes);
clothesRouter.put('/clothes/:id',updateClothes);
clothesRouter.delete('/clothes/:id',deleteClothes);
//--------------------

async function getAllClothes(req,res){
    const allClothes = await clothesModel.findAll()
    res.status(200).json(allClothes) 
}

async function getOneClothes(req,res){
    const id = parseInt(req.params.id)
    const oneClothes = await clothesModel.findOne({
            where:{
                id}})
    res.status(200).json(oneClothes) 
}

async function creatClothes(req,res){
    const newClothes = req.body;
    console.log(newClothes)
    const addClothes = await clothesModel.create(newClothes)
res.status(201).json(addClothes) 

}
async function updateClothes(req,res){
const id =parseInt(req.params.id);
const clothes = req.body;
const foundClothes = await clothesModel.findOne({where:{id}});
const updateClothes = await foundClothes.update(clothes)
res.status(201).json(updateClothes) 
}
async function deleteClothes(req,res){
    const id =parseInt(req.params.id);
    const deleteClothes = await clothesModel.destroy({where:{id}});
    res.status(204).json(deleteClothes) 

}


module.exports = clothesRouter