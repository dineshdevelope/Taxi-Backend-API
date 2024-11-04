import { Schema } from "mongoose";
import { model } from "mongoose";

const schema=new Schema({
   username:{
      type:String,
      required:true
   },
   phone:{
      type:String,
      required:true
   },
   date:{
      type:String,
      required:true
   },
   pickupaddress:{
      type:String,
      required:true
   },
   dropaddress:{
      type:String,
      required:true
   },
   kilometre:{
      type:Number,
      
   },
})

const Request=model("Request",schema)

export default Request