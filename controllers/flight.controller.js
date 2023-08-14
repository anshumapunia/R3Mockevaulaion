const {FlightModel}=require("../models/flight.model")



const registerFlight=async(req,res)=>{
    try {
        const { airline, flightNo, departure,arrival,departureTime,arrivalTime,seats,price } = req.body;
        const newFlight = new FlightModel({ airline, flightNo, departure,arrival,departureTime,arrivalTime,seats,price });
        await newFlight.save();
        res.status(201).send({ success: true, message: "Flight registered successfully", data:newFlight})
      } catch (error) {
        res.status(400).send({error:error.message})
      }
}





const getAllFlight=async(req,res)=>{
    try {
        const flight = await FlightModel.find();
        res.status(200).send({ success: true, message: "you successfully get flight details", data:flight});
      } catch (error) {
        res.status(400).send({ error: error.message });
      }
}




const getOneFlight=async(req,res)=>{
    try {
        const flightId = req.params.id;
        const flight = await FlightModel.findById(flightId);
    
        if (!flight) {
          return res.status(404).send({ success: false, message: "Flight not found" });
        }
    
        res.status(200).send({ success: true, data: flight ,message: "you successfully get flight details"});
      } catch (error) {
        res.status(400).send({ success: false, error: error.message });
      }
}


const deleteFlight=async(req,res)=>{
    try {
        const flightId = req.params.id;
        let flight=await FlightModel.findByIdAndDelete(flightId);
        res.status(200).send({success:true,message:"flight is delete"});
      } catch (error) {
        res.status(400).send({ success: false, error: error.message });
      }
}


const editFlight=async(req,res)=>{
    try {
        const flightId=req.params.id;
        const updateFlightData=req.body;
        const flight=await FlightModel.findByIdAndUpdate(flightId,updateFlightData,{new:true,})
        res.status(200).send({success:true,message: "flight is edit"})
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}




module.exports={registerFlight,getAllFlight,getOneFlight,deleteFlight,editFlight}