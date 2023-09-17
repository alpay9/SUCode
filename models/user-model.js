const db=require("../data/database")
const mongodb=require("mongodb");


class User{
    constructor(email,password,id){
        this.email=email;
        this.password=password;

        
    }

    async save(accessLevel){
    
        await db.getDatabase().collection("users").insertOne({
            email:this.email,
            password:this.password,
            accessLevel:accessLevel
        });
         
    }

    static async getUserWithSameEmail(email){
        const user=await db.getDatabase().collection("users").findOne({
            email:email
        });
        
        return user;
    }


}

module.exports=User;