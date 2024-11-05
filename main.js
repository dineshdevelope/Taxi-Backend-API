import express from "express"
import userRequestRoute from "./routes/user.request.js"
import connectDB from "./lib/db.js"
import cors from "cors";
const app=express()
const PORT = 5001

app.use(cors());
//Data understanding middleware
app.use(express.json())
app.use(express.urlencoded({ extented: true }))

connectDB()

/* app.get("/",(req,res)=>{
    res.json({message:"Your API"})
}) */

app.use('/request',userRequestRoute)

app.listen(PORT,()=>{
    console.log(`The Server is Running at http://localhost:${PORT}`);
})