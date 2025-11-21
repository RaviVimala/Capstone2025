import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: { type: String, required:true},
    Price: { type:Number, required: true },
    Image: { type: String, required: true },
    category : { type: String, required: true }
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;



