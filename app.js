const express =require("express");
const app=express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash")

const db = require("./config/mongoose-connection")
const productsRouter = require("./routes/productsRouter");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter=require("./routes/index");
const port=3000;
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash())
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
// app.get("/",(req,res)=>{
//     res.send("connected to port 3000");
// });

app.use("/",indexRouter)
app.use("/owners",ownersRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)
app.listen(port,()=>{
        console.log(`connected to the ${port}`);
        
})