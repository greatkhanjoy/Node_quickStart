require('dotenv').config();
require('express-async-errors');

//Extra security Packages
const express = require('express');
const app = express();

const connectDB = require('./DB/connect');
const notFound = require('./Middlewares/notFound');
const ErrorHandler = require('./Middlewares/error-handler');
const EmailRoutes = require('./Routes/EmailRoutes')


// varibales
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
app.use(express.static('public'));
app.use('/send', EmailRoutes)


//Middleware
app.use(ErrorHandler);
app.use(notFound);

                                                             


//Listeners
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.log(error);
    }
    
}
start();