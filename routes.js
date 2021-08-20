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

module.exports = router
