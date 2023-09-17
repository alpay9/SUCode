function checkCredentials(email,password){
    
    return email && password && email.trim().length>=6 && password.trim().length>=6 && email.includes("@");

}

function confirmPasswordMatching(pass,confirm){
    return pass===confirm;
}


module.exports={
    checkCredentials:checkCredentials,
    confirmPasswordMatching:confirmPasswordMatching
}