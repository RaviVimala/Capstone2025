import foodModel from "../models/foodModel.js";
import fs from "fs"

//add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        Name:req.body.Name,
        Description:req.body.Description,
        Price:req.body.Price,
        category:req.body.category,
        Image:image_filename
    })
    try {
        await food.save();
        res.json({ success:true, message: "Food Added"})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error"})
    }
}

//All Food List
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"}) 
    }
}

//Delete the food item from DB
const deleteFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        //To: Delete the food item from the upload folder
        fs.unlink(`uploads/${food.Image}`, () => {})
        //To: delete the food item from the DB
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Has Removed Success"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addFood, listFood, deleteFood};