function createAuthSession(req,user){
    req.session.userId=user._id.toString();
    req.session.username=user.email.split("@")[0];

    if(user.accessLevel!==1){
        req.session.isAdmin=true;
    }
}


function resetAuthSession(req){
    req.session.userId=null;
    req.session.username=null;
    req.session.isAdmin=null;
}






module.exports={
    createAuthSession:createAuthSession,
    resetAuthSession:resetAuthSession
}