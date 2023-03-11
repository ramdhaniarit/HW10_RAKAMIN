const FilmService = require("../services/servisfilm.js");

class movieController {

    static findMovie = async (req, res, next) => {

        try{
            const data = await FilmService.findMovies(next);
            res.status(200).json(data)
        }catch (err) {
            next(err);
        };
    }

    static findByid = async (req, res, next) => {
      try {
        const {id} = req.params;
        const data = await FilmService.findById(id, next);
        if (data) {
            res.status(200).json(data);
        } else{
            next({name : "ErrorNotFound"})
        }
       
      }catch(err){
        next(err)
      }
    }

    static createMovies = async (req, res , next) => {

        try {
            const {id} = req.params;
            const data = await FilmService.createMovies(id, next);
            res.status(201).json(data);
        } catch(err){
            next(err);
        }
    }

    static updateMovie = async (req, res, next)=>{
        try{
            const data = await FilmService.updateMovie(req.body, next)
            res.status(201).json(data);
        } catch(err){
            next(err)
        }

    }
     static deleteMovie = async (req, res, next) =>{
         try{
            const {id}= req.params;
            const dtaa = await FilmService.deleteMovie(id, next);
            if (data){
                res.status(200).json({
                    message: "berhasil dihapus"
                })
            }else {
                next({name: "ErrorNotFound"})
            }
         }catch(err){
            next(err)
         }
     }

}


module.exports = movieController;
