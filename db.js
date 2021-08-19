
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const getUsers =(db = connection) =>{
  return db('users').select()
}

const getUnits = (db = connection) =>{
  return db('unit').select()
}

const getIngredientsNutritions = () =>{
  return db('')
}