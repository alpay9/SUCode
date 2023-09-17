function createErrorSession(req,data){
    req.session.errorData={
        ...data
    }
}




module.exports={
    createErrorSession:createErrorSession
}