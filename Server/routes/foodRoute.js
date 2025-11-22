import express from "express";
import { addFood, listFood, deleteFood } from "../controllers/foodController.js"
import multer from "multer"


const foodRouter = express.Router();

//Image Storage
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()} ${file.originalname}`);
    }
});

const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"), addFood);
foodRouter.get("/foodlist",listFood);
foodRouter.post("/deletefood", deleteFood);




export default foodRouter;