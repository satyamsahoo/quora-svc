const jwt = require('jsonwebtoken')
const shortid = require('shortid')
const secretKey = 'someVeryRandomStringThatNobodyCanGuess';

let generateToken = (userData , cb) =>{
    try {
        let claims = {
            jwtid : shortid.generate(),
            iat : Date.now(),
            exp : Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            sub : 'authtoken',
            data : userData
        }

        let tokenDetails = {
            token : jwt.sign(claims , secretKey),
            tokenSecret : secretKey
        }

        cb(null, tokenDetails);
    } catch (err) {
        cb(err, null)
    }
}


let verfyToken = () =>{

}

module.exports = {
    generateToken,
    verfyToken
}
