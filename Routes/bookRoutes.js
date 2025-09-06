import express from "express";
import Book from "../Models/BookModel";

const router=express.Router();

router.post("/add", async(req,res)=>{
    const{title,author,publishedDate,genre} =req.body;
    const newBook = new Book({title,author,genre,publishedDate})
    try{
        await newBook.save();
        res.status(200).json({message: "Boook Added "})
    }catch(err){
        res.status(400).json({message:"error in the saving book", err:err.message})

    }
})