const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "movieplatform",
    password: "aRiE123@",
    port: 5432

})

module.exports = pool;