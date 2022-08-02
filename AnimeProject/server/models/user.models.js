const mongoose = ('mongoose');

const UserSchema = new mongoose.Schema ({
    firstName: {
        type:String,
        required: [true, "First name required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val), 
            message: 'Please enter a valid email',
        },
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
    },
},
{timestamps: true}
);

module.exports = mongoose.model ('User, UserSchema')