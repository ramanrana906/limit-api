const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller');



router.get('/getData',apiController.allData);







module.exports = router;