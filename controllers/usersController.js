const User = require('./../models/User');
const shortid = require('shortid');
const response = require('./../libs/response');
const check = require('./../libs/check');
const password = require('./../libs/password');
const jwtToken = require('./../libs/jwttoken');

async function login(req, res) {
    console.log('Login called');
    let retriveUser = () => {
        return new Promise((resolve, reject) => {
            User.findOne({ email: req.body.email }).exec((err, result) => {
                if (err) {
                    console.log('RetrievedUser err:', err)
                    let apiResponse = response.generate(true, 'Error while retrieving user', 500, null);
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    console.log('RetrievedUser err2:', result)
                    let apiResponse = response.generate(true, 'No user present with given emailid', 404, null);
                    reject(apiResponse)
                } else {
                    console.log('RetriveUser : ', result)
                    resolve(result)
                }
            })
        })
    }

    let passwordVerification = (result) =>{
        return new Promise((resolve, reject)=>{
            if(password.comparePassword(req.body.password, result.password)){
                let resultObj = result.toObject();
                delete resultObj._id;
                delete resultObj.password;
                resolve(resultObj)
            } else {
                let apiResponse = response.generate(true, 'Incorrect Password', 401, null);
                reject(apiResponse)
            }
        })
    }

    let generateJWTToken = (result) =>{
        return new Promise((resolve, reject)=>{
            jwtToken.generateToken(result, (err, tokenDetail)=>{
                if(err){
                    let apiResponse = response.generate(true, 'Error while loggin', 500, null);
                    reject(apiResponse)
                } else{
                    userData = {
                        token : tokenDetail.token,
                        userInfo : result
                    }
                    console.log('generateToken : ', tokenDetail)
                    resolve(userData)
                }
            })
        })
    }

    retriveUser(req, res)
    .then(passwordVerification)
    .then(generateJWTToken)
    .then((data)=>{
        let apiResponse = response.generate(false, 'User Logged in', 200, data);
        res.send(apiResponse)
    }).catch((err)=>{
        res.send(err)
    });

}


let register = (req, res) => {
    console.log('Register called', req.body)
    User.findOne({ email: req.body.email }).exec((err, retrievedUserDetail) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error while creating user', 500, null);
            res.send(apiResponse)
            console.log('error in register:',err)
        } else if (check.isEmpty(retrievedUserDetail)) {
            let userId = shortid.generate();
            const newUser = new User({
                userId,
                name: req.body.name,
                email: req.body.email,
                password: password.encryptPassword(req.body.password)
            })
            console.log('newUser', newUser)
            newUser.save((err, result) => {
                if (err) {
                    console.log('error in saving newuser in register:',err)
                    let apiResponse = response.generate(true, 'Error while saving user', 500, null);
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User created successfully', 200, result);
                    res.send(apiResponse)
                }
            })
        } else {
            let apiResponse = response.generate(true, 'Email already present', 403, null);
            res.send(apiResponse)
        }
    })

}

let getAllUsers = (req, res) => {
    console.log('Get all users called');
    User.find().exec((err, users) => {
        if (err) {
            res.send(err)
        } else {
            res.send(users)
        }
    })
    res.send('Get all users called')
}

module.exports = {
    login,
    register,
    getAllUsers
}