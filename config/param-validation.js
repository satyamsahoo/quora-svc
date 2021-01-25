const Joi = require('joi');

module.exports = {
    login : {
        email : Joi.string().required(),
        password : Joi.string().required()
    },

    register : {
        email : Joi.string().required(),
        password : Joi.string().required(),
        name : Joi.string().required()
    }

}