const pool = require("../config/config.js")
const { deleteMovie } = require("../repositories/filmrepository.js")

class movie {

      static getMovies =  async (next) => {
 

        const findQuery =  `
            SELECT * FROM movies;
        
        `
        try {
        const data = await pool.query(findQuery)

        return data.rows
        }catch(err) {
            next(err)
        }
    }

    static findById =  async (id, next) =>{
        
        const findQuery = `
         SELECT * FROM movies
         WHERE id =$1
        `

        try {
            const data = await pool.query(findQuery, [id])

            if(data.rows.length === 0) {
                next({name : "ErrorNotFound"})
            } else {
               return data.rows; 
            }

        } catch (err){
            next(err);
        }
    }
    static createMovies = async (params, next) => {
       

            const insertQuery = `
             INSERT INTO movies (title, genres, year, photo)
                Values 
                ($1, $2, $3, $4)

            RETURNING *

            `
         try {
            const data = await pool.query(insertQuery, [title, genres, year, photo])

            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }
    static updateMovie = async (req, res, next )=>{
        try{
        const {id} = req.params;
         const updateMovie =`
            UPDATE movies
            SET year = 2023
            WHERE id = $1;
            `
       

        const data = await pool.query(updateMovie)
        return data;

        }catch (err){
            next(err)
        }
    }
    static deleteMovie =async (id, next)=>{

        try{
            const deleteQuery =`
            
            DELETE FROM movies
            WHERE id = $1
            `
            const data = await pool.query(deleteQuery);
            return data.rows[0];
            }catch(err){
            next(err);
        }
    }

} 
 
module.exports = movie;