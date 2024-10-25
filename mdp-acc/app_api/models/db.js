const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://feliciacalista18:mongofeli88@cluster0.nffh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("mongoDB Connected...");
    } catch (error){
        console.error("MongoDB connection error:", error);

        process.exit(1);
    }
    };

    module.exports = connectDB;