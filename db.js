
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

//getting users
const getUsers =(db = connection) =>{
  return db('users').select()
}

//getting units for dropping list 
const getUnits = (db = connection) =>{
  return db('unit').select()
}

//getting mealTypes for dropping list
const getMealType = (db = connection) => {
  return db('meal').select()
}

//getting the nutritions of every ingridients
const getIngredientsNutritions = (ingreID,db = connection) =>{
  return db('ingredients')
  .join('nutrition','nutrition.ingredients_id','nutrition.id')
  .where('ingredients.id',ingreID)
  .select()
}

module.exports = {
  getUsers:getUsers,
  getUnits:getUnits,
  getIngredientsNutritions:getIngredientsNutritions,
  getMealType:getMealType,
}