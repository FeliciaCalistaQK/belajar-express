const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        uniqe: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

UserSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

module.exports =mongoose.model("user", UserSchema);
