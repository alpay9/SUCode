function setColorMode(req,res){
    
    if(req.body.color==="dark"){

        
        req.session.colorMode="dark";

        
    }else{

        
        req.session.colorMode="daylight";
    }

    req.session.save(function(){
        res.json({
            message:"SUCCESS"
        });
    })
}


module.exports={
    setColorMode:setColorMode
}