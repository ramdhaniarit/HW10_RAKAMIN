const filmRepo = require ("../repositories/filmrepository.js");
const { param } = require("../routes/movie.js");

class FilmService {

    static findMovies = async (next) => {
        try{
        const data = await filmRepo.findMovies(next);
        return data;
        } catch (err){
            next(err);
        }
       
        
        
    }

    static findById = async (id, next)=>{
        try{
            const data = await filmRepo.findById(id, next);
            return data;
        } catch (err){
            next(err);
        }
    }

    static createMovies = async (params, next) => {
        try{
            const data = await filmRepo.createMovies(params, next);
            return data;
        }catch (err){
            next(err);
        }
    }

    static updateMovie = async (id, next)=>{
        try{
            const data = await filmRepo.updateMovie(id, next);
            return data;

        } catch(err){
            next(err)
        }
    }
    static deleteMovie = async (id, next)=>{
        try{
            return filmRepo.deleteMovie(id, next);

        }catch(err){
            next(err)
        }
    }
}

module.exports = FilmService;