import express from 'express';
import { getVehicle } from '../controllers/vehiclesCtrl';


const router = express.Router();

router.get('/:id/', getVehicle);

module.exports = router;