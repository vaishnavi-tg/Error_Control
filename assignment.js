const express=require("express")
const zod=require("zod")
const app=express()
const jwt=require("jsonwebtoken")
const jwtpassword="secret"
const emailschema=zod.string().email()
const passwordschema=zod.string().min(6)

function signjwt(username,password){
    const usernameresponse=emailschema.safeParse(username)
    console.log(usernameresponse)
    const passwordresponse=passwordschema.safeParse(password)
    if (!usernameresponse.success||!passwordresponse.success){
        return null
    }
    const signature=jwt.sign({
        username},
        jwtpassword)
    
        return signature
}

function decodejwt(token){
    const decoded=jwt.decode(token)
    if (decoded){
        return true
    }
    else{
        return false
    }
}

function jwtverify(token){
    let ans=true
    try{
    jwt.verify(token,jwt.password)
    }
    catch (err){
        ans=false
    }
    return ans
}
ans=jwtverify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhaXNzaG5hdmlAZ21haWwuY29tIiwiaWF0IjoxNzQxODQwNzMzfQ.Xkewxu1WLAcXq16Fk2LRsk-J2s66i6DA0hL_rOG34dw","secret")
console.log(ans)
