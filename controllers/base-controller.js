function getHome(req,res){
    res.render("general/home");
}

function getProblems(req,res){
    res.render("general/problems");
}

module.exports={
   getHome:getHome,
   getProblems:getProblems
}