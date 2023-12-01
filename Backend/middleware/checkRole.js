const jwt = require('jsonwebtoken');
const JWT_SECREAT='akshat@09'
const checkRole=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        res.status(401).send({error:'plz authenticate using valid token'})
    }
    const requiredRole="manager"
  try {
    const data=jwt.verify(token,JWT_SECREAT);
    if (data.role !== requiredRole) {
        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
      }
    req.user=data
    next()
    
  } catch (error) {
       res.status(401).json(error)
  }
}

module.exports=checkRole