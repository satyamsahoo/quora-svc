let config = {
    apiVersion : '/api/v1',
    port : 4000,
    allowedCorsOrigin : "*",
    env : 'dev',
    db : 'mongodb://127.0.0.1:27017/quoraApp'
}

module.exports = {
    apiVersion : config.apiVersion,
    port : config.port,
    allowedCorsOrigin : config.allowedCorsOrigin,
    env : config.env,
    db : config.db
}