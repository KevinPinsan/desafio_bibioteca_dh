module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD : "123@123",
    DB: "db_biblioteca",
    dialect: "mysql",
    pool: {
        max: 5,
        min : 0,
        acquire: 30000,
        idle: 10000 
    }
}