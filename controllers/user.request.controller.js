import Request from "../models/request.model.js"

export const CreateRequest =async(req,res)=>{
   
  //console.log(req.body);
  //return res.json(req.body)

  //Validation
   const newRequest = new Request ({
      username:req.body.username,
      phone:req.body.phone,
      date:req.body.date,
      pickupaddress:req.body.pickupaddress,
      dropaddress:req.body.dropaddress,
      kilometre:req.body.kilometre,
  })

try {
  const request= await newRequest.save()
  console.log(request);
  
  return res.status(201).json(request)
} catch (error) {
  return res.status(400).json({message:error.message})
}

  
}

export const GetRequest =async(req,res)=>{
    try {
        const request = await Request.find()
        res.json(request)

    } catch (error) {
    return res.status(400).json({message:error.message})
    }
}    


export const SingleRequest=async(req,res)=>{
  try {
    const request=await Request.findById(req.params.id)
    if(request == null){
     return res.status(404).json({message:"Can't Find Your Request"})
    }
    else{
     res.json(request)
    }
   } catch (error) {
    return res.status(500).json({message:error.message})
   }
}


export const UpdateRequest=async(req,res)=>{

 try {
  
  const updatedRequest=await Request.findOneAndUpdate(

    {_id:req.params.id},

    {
      username : req.body.username,
      phone:req.body.phone,
      date:req.body.date,
      pickupaddress : req.body.pickupaddress,
      dropaddress : req.body. dropaddress,
      kilometre:req.body.kilometre
    },

    {
      new:true,
    })

    res.status(200).json(updatedRequest)


 } catch (error) {
  return res.status(400).json({message:error.message})
 }
  
}



export const DeleteRequest=async(req,res)=>{
   try {
    await Request.findOneAndDelete({_id:req.params.id})
    res.json({message:"Request Deleted"})
   } catch (error) {
    return res.status(400).json({message:error.message})
   }
}