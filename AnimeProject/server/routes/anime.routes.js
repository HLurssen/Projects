const AnimeController = require("../controllers/anime.controllers");


// Routes go here
module.exports = (app)=>{
    app.get ("/api/animes", AnimeController.findAllAnimes);
    app.post("/api/animes", AnimeController.createAnime);
    app.get("/api/animes/:id", AnimeController.findOneAnime);
    app.put("/api/animes/:id", AnimeController.updateAnime);
    app.delete("/api/animes/:id", AnimeController.deleteAnime);
}