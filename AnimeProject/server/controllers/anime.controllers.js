const Anime = require ("../models/anime.models");

// module.exports.sayHello = (req,res)=>{
//     res.json({msg: "Japanese Denim"});
// }
// ================================================= //
module.exports.findAllAnimes = (req,res)=>{
    Anime.find()

        .then(allAnimes=>{
            res.json({results: allAnimes})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.createAnime = (req,res)=>{
    Anime.create(req.body)

        .then(newlyCreatedAnime=>{
            res.json({results: newlyCreatedAnime})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.findOneAnime = (req,res)=>{
    Anime.findOne({_id: req.params.id})

        .then(foundAnime =>{
            res.json({results: foundAnime})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.updateAnime = (req,res)=>{
    Anime.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )

        .then(updatedAnime=>{
            res.json({results: updatedAnime})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.deleteAnime = (req,res)=>{
    Anime.deleteOne({_id: req.params.id})

        .then(deletedAnime=>{
            res.json({results: deletedAnime})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}