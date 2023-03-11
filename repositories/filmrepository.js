const movie = require ("../models/movies.js");
const { deleteMovie } = require("../services/servisfilm.js");

class FilmRepo {

    static findMovies = async (next) => {
        try{
            const data = await movie.getMovies(next);
            return data;
        }catch(err){
            next(err);
        }
        
    }

    static findById = async (id, next) =>{

        try {
            const data = await movie.findById(id, next);
            return data;
        
        }catch(err){
            next(err);
        }
    }

    static createMovies = async (params, next) =>{

        try{
            const data = await movie.createMovies(params, next);
            return data;
        }catch(err){
            next(err);
        }
    }

    static updateMovie = async (id, next) => {
        try{
            const data = await movie.updateMovie(id, next);
            return data;
        } catch (err){
            next(err)
        }
    }
    static deleteMovie = async (id, next)=>{
        try{
            const data = await movie.deleteMovie(id, next);
            

        }catch(err){
            next(err);
        }
    }

}

module.exports = FilmRepo;