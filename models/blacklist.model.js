const mongoose=require("mongoose");
const blacklistSchema=mongoose.Schema({
    token:{
        type:String,
        require:true,
        unique:true,
    }
},{
    versionKey:false,
    timestamps:true
});

const BlacklistModel=mongoose.model("blacklist",blacklistSchema);
module.exports={BlacklistModel};