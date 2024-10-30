import express from "express";
import {connectDB} from "./config/db.js";
import dotenv from 'dotenv';
import router from "./routes/productRouter.js";
import cors from "cors";
import path from "path";
const __dirname = path.resolve();
// console.log(__dirname)
const app = express();
app.use(cors());
app.use(express.json()); // allow us to accespt json data on req.body
dotenv.config();
app.use("/products",router)
// if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"/frontend/dist")) )
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })

// }
const port = process.env.PORT || 5000
//code nfJ9XdEjytiLCZKQ 
app.listen(port,()=>{
    connectDB();
    console.log("server started",port)
})