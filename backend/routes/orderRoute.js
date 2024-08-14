import { placeOrder } from "../controller/orderController.js";
import express from "express"
import authMiddleware from '../middleware/path.js';

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;

