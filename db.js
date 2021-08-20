
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

const getIngredientID = (IngreName,db = connection) =>{
  return db('ingredients')
  .where('ingredients.ingredients_name',IngreName)
  .select('id')
}


//getting the nutritions of every ingridients
const getIngredientsNutritions = (ingreID,db = connection) =>{
  console.log(ingreID)
  return db('nutrition')
  // .join('nutrition','nutrition.ingredients_id','nutrition.id')
  .where('ingredients_id',ingreID[0].id)
  .select()
}

module.exports = {
  getUsers:getUsers,
  getUnits:getUnits,
  getIngredientID: getIngredientID,
  getIngredientsNutritions:getIngredientsNutritions,
  getMealType:getMealType,
}