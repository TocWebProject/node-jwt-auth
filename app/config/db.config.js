module.exports = {
    //MAMP Setup
    HOST: "127.0.0.1",
    PORT: "3306",
    USER: "root",
    PASSWORD: "admin",
    DB: "node_js_secu",
    dialect: "mariadb",
    
    pool: {
        // maximum number of connection in pool
        max: 5,  
        // minimum number of connection in pool
        min: 0,
        // maximum time, in milliseconds, that pool will try to get connection before throwing error
        acquire: 30000,
        // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000
    }
};
