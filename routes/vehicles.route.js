const express = require('express');
const { getVehicle } = require('../controllers/vehicles.ctrl');


const router = express.Router();

router.get('/:id/', getVehicle);

module.exports = router;