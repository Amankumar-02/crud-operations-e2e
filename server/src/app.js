import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: ".env"});
import cors from 'cors';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import morgan from "morgan";
import userRouter from './routes/userRouter.js';
import taskRouter from './routes/taskRouter.js';

export const app = express();
export const port = process.env.PORT || 5000;

app.set("view engine", "ejs")
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        error: {
        status: err.status || 500,
        message: err.message || "Internal Server Error"
    }
    });
});

// another error handler for rendering error page, if needed in the future
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
