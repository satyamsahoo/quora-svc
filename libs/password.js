const bcrypt = require('bcrypt');
const saltRounds = 10;


let encryptPassword =(myPlaintextPassword)=>{
    return bcrypt.hashSync(myPlaintextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        if(err){
            console.log('error in bcrypt:',err)
            return err;
        } else{
            return hash;
        }
    });

}

let comparePassword =(myPlaintextPassword , hash) =>{
    return bcrypt.compareSync(myPlaintextPassword, hash);
}

module.exports = {
    encryptPassword,
    comparePassword
}