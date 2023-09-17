const express=require("express");
const session=require("express-session");


const db=require("./data/database");

const sessionConfig=require("./config/session-config");
const authRoutes=require("./routes/auth-routes");
const baseRoutes=require("./routes/base-routes");
const configRoutes=require("./routes/config-routes");

const localsMiddleware=require("./middlewares/set-locals");



const app=express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))



let rememberMe;
app.use(function(req,res,next){
    if(req.body && req.body.remember){
        rememberMe=true;
    }else{
        rememberMe=false;
    }
    next();
})
app.use(session(sessionConfig.getSessionObject(sessionConfig.getStorage(),rememberMe)));
app.use(localsMiddleware);




app.use(configRoutes);
app.use(baseRoutes);
app.use(authRoutes);

db.connectDatabase().then(
    function(){
        app.listen(3000);
    }
).catch(function(err){
    console.log("Cannot connect to database");
})






