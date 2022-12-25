const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

// middleware that is specific to this router
console.log('router loaded');
router.get('/',homeController.home);


module.exports = router;