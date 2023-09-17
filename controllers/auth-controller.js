
const bcrypt = require('bcryptjs');
const User=require("../models/user-model");
const authSession=require("../util/auth-session");
const errorSession=require("../util/error-session");
const userValidation=require("../validation/login-signup-validation")


function getLogin(req,res){

    let dataToBeRendered;

    if(req.session.errorData){
        dataToBeRendered=req.session.errorData;
        req.session.errorData=null;
    }else{
        dataToBeRendered={
            email:""
        }
    }

    res.render("auth/login",{errorData:dataToBeRendered});
}

async function postLogin(req,res){
    const {email , password }= req.body;

    if(!userValidation.checkCredentials(email,password)){
        errorSession.createErrorSession(req,{
            message:"Invalid Credentials",
            enteredEmail:email
        });
        res.redirect("/login");
        return;
    }
    
    const existingUser=await User.getUserWithSameEmail(email);

    if(existingUser){

        const doesPasswordMatch=await bcrypt.compare(password,existingUser.password);

        if(doesPasswordMatch){
            

            authSession.createAuthSession(req,existingUser);

            


            res.redirect("/");
            return;
        }else{
            errorSession.createErrorSession(req,{
                message:"Incorrect Password",
                enteredEmail:email
            });
            res.redirect("/login");
            return;
        }

    }else{
        errorSession.createErrorSession(req,{
            message:"Email does not exist",
            enteredEmail:email
        });
        res.redirect("/login");
        return;
    }


}



function getSignup(req,res){
    
    let dataToBeRendered;

    if(req.session.errorData){
        dataToBeRendered=req.session.errorData;
        req.session.errorData=null;
    }else{
        dataToBeRendered={
            email:""
        }
    }



    res.render("auth/signup",{errorData:dataToBeRendered})
}

async function postSignup(req,res){
    const {email , password ,confirmPassword}= req.body;


    if(!userValidation.checkCredentials(email,password)){

        errorSession.createErrorSession(req,{
            message:"Invalid Credentials",
            enteredEmail:email
        });
        res.redirect("/signup");
        return;
    }

    if(!userValidation.confirmPasswordMatching(password,confirmPassword)){
        errorSession.createErrorSession(req,{
            message:"Passwords do not match!",
            enteredEmail:email
        });;
        res.redirect("/signup");
        return;
    }

    const existingUser=await User.getUserWithSameEmail(email);
    if(existingUser){
        
        errorSession.createErrorSession(req,{
            message:"Email already exists",
            enteredEmail:email
        });
        res.redirect("/signup");
        return;
    }

    const hashedPassword=await bcrypt.hash(password,12);
    const user= new User(email,hashedPassword);
    

    await user.save(1);


    res.redirect("/login");


}

function logout(req,res){
    authSession.resetAuthSession(req);
    res.redirect("/login");
}


module.exports={
    getLogin:getLogin,
    getSignup:getSignup,
    postLogin:postLogin,
    postSignup:postSignup,
    logout:logout
}