let generate = (err, message, status ,data) =>{
    response ={
        error : err,
        message : message,
        status : status,
        data : data
    }
    return response;
}

module.exports = { generate : generate }