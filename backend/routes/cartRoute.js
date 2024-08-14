import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controller/cartCondtoller.js'
import authMiddleware from '../middleware/path.js';

const cartRouter = express.Router();

cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/get',authMiddleware,getCart)
cartRouter.post('/remove',authMiddleware,removeFromCart)


export default cartRouter;



