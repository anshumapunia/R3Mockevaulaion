const {Router}=require("express");
const flightRoute=Router();
const {auth}=require("../middlewares/auth.middleware");
const {registerFlight,getAllFlight,getOneFlight,deleteFlight,editFlight}=require("../controllers/flight.controller");


flightRoute.post("/flights",registerFlight)
flightRoute.get("/flights",getAllFlight)
flightRoute.get("/flights/:id",getOneFlight)
flightRoute.put("/flights/:id",editFlight)
flightRoute.delete("/flights/:id",deleteFlight)






module.exports={flightRoute}