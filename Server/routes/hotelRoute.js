import express from "express";
import { createHotel } from"../controllers/hotelController.js";

const router = express.Router();
// const createHotel = require('../controllers/hotelController');
router.post('/create', createHotel );


export default router;