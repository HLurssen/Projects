const mongoose = require ('mongoose');

const AnimeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Anime title is required"],
        },
        genre: {
            type: String,
            required:[true, "Genre(s) is/are required"]
        }, 
        description: {
            type: String,
            required: [true, "Description is required"],
            minlength: [4, "Really? Not even 4 characters? "]
        },
        rating: {
            type: Number,
            max: 100
        },
    }, {timestamps: true});

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;