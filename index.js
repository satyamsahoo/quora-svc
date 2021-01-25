const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = require('./config/appConfig').port; 
const db = require('./config/appConfig').db;
var cors = require('cors')
const bodyParser = require('body-parser')
const usersRoute = require('./routes/users');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(usersRoute);


app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);

    } else {
        console.log("database connection open success");
    }

});
