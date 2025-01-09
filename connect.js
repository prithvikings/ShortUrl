const mongoose=require('mongoose');
const connectToDB=async()=>{
   await mongoose.connect(
    "mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/short-url"
    );
};

module.exports={connectToDB};

