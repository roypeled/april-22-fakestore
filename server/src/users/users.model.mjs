import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        minLength: 4,
        maxLength: 10,
    },
    age: {
        type:Number,
        validate: [val => val > 18, "Age is lower than 18"]
    },
    isAdmin: {
        Boolean,
        default: false,
    },
    address: {
        city:String,
        street:String,
        number:Number,
    },
    favoriteColors: [{
        type:String,
        enum: ["red", "green", "blue"],
    }],
});

export const User = new mongoose.model('User', UsersSchema);