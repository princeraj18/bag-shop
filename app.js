const express =require("express");
const app=express();
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connection")
const productsRouter = require("./routes/productsRouter");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const port=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
    res.send("connected to port 3000");
});


app.use("/owners",ownersRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)
app.listen(port,()=>{
        console.log(`connected to the ${port}`);
        
})