import { Schema, model } from "mongoose";

const schema = new Schema({
   username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minLength: [3, "Username cannot be empty"], // Prevents empty values
   },
   phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
   },
   date: {
      type: Date,
      required: [true, "Date is required"],
   },
   pickupaddress: {
      type: String,
      required: [true, "Pickup address is required"],
      trim: true,
      minLength: [1, "Pickup address cannot be empty"],
   },
   dropaddress: {
      type: String,
      required: [true, "Drop address is required"],
      trim: true,
      minLength: [1, "Drop address cannot be empty"],
   },
   kilometre: {
      type: Number,
      min: [0, "Kilometre cannot be negative"],
   },
});

const Request = model("Request", schema);

export default Request;
