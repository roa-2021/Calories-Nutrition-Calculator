const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
  // .catch((err) => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
})
// router.get('/output', (req, res) => {
//   return db.getIngredientID(req.body.ingredients)
//   .then(ingreID=> {
//     db.getIngredientsNutritions(ingreID)
//       .then(nutrition=>{
//         nutritionArr.push(nutrition)
//   })
//   res.redirect('/')
// })
// })

router.post('/', (req, res) => {
  return db.getIngredientID(req.body.ingredients).then((ingreID) => {
    db.getIngredientsNutritions(ingreID).then((results) => {
      let nutritionArr = results.shift()

      //add meal type and unit to the data (scuff fix, not from DB)
      nutritionArr.serving = req.body.serving
      nutritionArr.meal = req.body.ingredient
      caculation(nutritionArr)

      res.render('output', { nutritionArr })
    })
  })
})

router.get('/output', (req, res) => {
  res.render('output')
  // .catch((err) => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
})

const caculation= (nutritions) =>{
  var serve = nutritions.serving
  var calories = nutritions.calories*serve;
  var fats = nutritions.fats*serve;
  var protein = nutritions.protein*serve;
  var carbs = nutritions.carbs*serve;
  nutritions.calories = calories;
  nutritions.carbs = carbs;
  nutritions.fats = fats;
  nutritions.protein = protein;
  return nutritions;
}

module.exports = router
