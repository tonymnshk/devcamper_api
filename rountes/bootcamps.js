const express = require('express')
const {getBootcamps, getBootcamp, createtBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps')

// router.get('/', (req, res) => {
  //   res.status(200).json({success: true, msg:'Show all bootcamps'})
  // })
  
const router = express.Router()

router.route('/')
  .get(getBootcamps)
  .post(createtBootcamp)

  router.route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

module.exports = router