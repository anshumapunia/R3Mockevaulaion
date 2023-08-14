const {Router}=require("express");
const bookingRoute=Router();
const {auth}=require("../middlewares/auth.middleware");
const {registerBooking,getAllBooking,deleteBooking,editBooking}=require("../controllers/booking.controller")





bookingRoute.post("/booking",registerBooking)
bookingRoute.get("/dashboard",getAllBooking)
bookingRoute.put("/dashboard/:id",editBooking)
bookingRoute.delete("/dashboard/:id",deleteBooking)



module.exports={bookingRoute}