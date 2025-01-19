const jwt= require("jsonwebtoken")
const JWT_TOKEN="secret"
const  zod= require("zod")

const emailSchema = zod.string().email()
const passwordSchema=zod.string().min(6)

function signJWT(username, password){
  const uResponse= emailSchema.safeParse(username)
  const pResponse= passwordSchema.safeParse(password)
  if(!uResponse.success || !pResponse.success){
   return null; 
  }
  const signature= jwt.sign({
    username}, JWT_TOKEN)

  return signature;
}

function decodeJwt(token){
    const decoded= jwt.decode(token)
    if(decoded){
        return true
    }
    else{
        return false
    }
}

function verifyJwt(token){
    let ans= true;
    try{
        jwt.verify(token, JWT_TOKEN)
    }
    catch(e){
        ans=false
    }
    return ans
}



const ans= signJWT("slkdjflsjdf@gmail.com", "slkdjflskjdflsdkj")
console.log(ans)

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNsa2RqZmxzamRmQGdtYWlsLmNvbSIsImlhdCI6MTczNzI5NjQ0M30.fz6m3s0RmDBvULkjibpJh1_Ftf6-cJWy2CFu7dyQHiE"))
console.log("Ans is verified")
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNsa2RqZmxzamRmQGdtYWlsLmNvbSIsImlhdCI6MTczNzI5NjQ0M30.fz6m3s0RmDBvULkjibpJh1_Ftf6-cJWy2CFu7dyQHiE"))
console.log("token is decoded")