import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";
import {Sequelize} from "sequelize";
import Register from "./models/RegisterModel.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(UserRoute);
 
app.post('/register', (req, res) => {
    // Get the user's data from the request body
    const userData = req.body;

    var email = userData.email;
    var password = userData.password;
    var firstName = userData.firstName;
    var lastName = userData.lastName;
    
   // create from sequelize

    Register.create({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName
    });

    res.send({ message: 'Account created!' });
});

//check session
app.get('/check-session', (req, res) => {
    if (req.session.user) {
        res.send({ message: 'Session exists!' });
    } else {
        res.send({ message: 'Session does not exist!' });
    }
});

  
app.post('/login', (req, res) => {
    // Get the user's data from the request body
    const userData = req.body;

    var email = userData.email;
    var password = userData.password;

    Register.findOne({
        where: {
            email: email,
            password: password
        }
    }).then(user => {
        if (user) {
            // success
            const accessToken = jwt.sign({ email: user }, 'secret', {
                expiresIn: '20s'
            });

            const refreshToken = jwt.sign({ email: user }, 'secret', {
                expiresIn: '1d'
            });

            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json({ accessToken });
        } else {
            res.send({ message: 'Login failed!' });
        }
    });
});



app.listen(5000, ()=> console.log('Server up and running...'));