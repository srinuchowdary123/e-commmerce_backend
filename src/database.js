const mongoose = require("mongoose");



const connectDB = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://sriramojiabhiram:doMQzs4pnILjrIle@cluster0.72y26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ECommerce`);
        console.log('MongoDB Connected');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;