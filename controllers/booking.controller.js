const {BookingModel}=require("../models/booking.model")


const registerBooking=async(req,res)=>{
    try {
        const {user,flight} = req.body;
        const newBooking = new BookingModel({ user,flight});
        await newBooking.save();
        res.status(201).send({ success: true, message: "Booking registered successfully", data:newBooking})
      } catch (error) {
        res.status(400).send({error:error.message})
      }
}





const getAllBooking=async(req,res)=>{
    try {
        const booking = await BookingModel.find();
        res.status(200).send({ success: true, message: "you successfully get flight Booking details", data:booking});
      } catch (error) {
        res.status(400).send({ error: error.message });
      }
}




const deleteBooking=async(req,res)=>{
    try {
        const bookingId = req.params.id;
        let flight=await BookingModel.findByIdAndDelete(bookingId);
        res.status(200).send({success:true,message:"Booking is delete"});
      } catch (error) {
        res.status(400).send({ success: false, error: error.message });
      }
}


const editBooking=async(req,res)=>{
    try {
        const bookingId=req.params.id;
        const updateBookingData=req.body;
        const booking=await BookingModel.findByIdAndUpdate(bookingId,updateBookingData,{new:true,})
        res.status(200).send({success:true,message: "booking is edit"})
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}




module.exports={registerBooking,getAllBooking,deleteBooking,editBooking}