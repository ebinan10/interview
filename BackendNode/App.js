const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const LGA = require('./router/lga/LGA');
const PollingUnit = require('./router/polling-unit/PollingUnit');
const State = require('./router/state/State');
const User = require('./router/user/User');
const Ward = require('./router/ward/Ward');
const cors = require('cors')

const app = express();
 
app.use(express.json()) 
app.use(cors({origin:true,credentials: true} ))

mongoose.connect(process.env.Uri).then(()=>{
    app.listen(process.env.Port, 
    console.log("server is running now!!!"))
        app.use('/user', User)
    app.use('/pollingunit', PollingUnit)
    app.use('/state', State)
    app.use('/lga',LGA)
    app.use('/ward', Ward) 
    })
    .catch(err=>{
    console.log(err)
}) 

