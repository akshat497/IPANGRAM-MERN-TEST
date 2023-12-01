const jwt = require('jsonwebtoken');
const JWT_SECREAT='akshat@09'
const fetchuser=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        res.status(401).send({error:'plz authenticate using valid token'})
    }
  try {
    const data=jwt.verify(token,JWT_SECREAT);
    req.user=data
    next()
    
  } catch (error) {
       res.status(401).json(error)
  }
}

module.exports=fetchuser