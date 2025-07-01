import foodModel from "../models/foodModel.js";
import fs from 'fs'

//Add food item
const addFood = async (req, res)=>{
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image:image_filename
    })
    try{
        await food.save()
        res.json({success:true, message: "Food Added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//All Food List
const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error})
    }
}

//Remove food item
const removeFood = async(req, res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        //deleting at local
        fs.unlink(`uploads/${food.image}`, ()=>{})
        //deleting at database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//686119f4b8b1fb0388059a49

export {addFood, listFood, removeFood}