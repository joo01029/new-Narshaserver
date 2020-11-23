const crypto = require('crypto');
const secrete = "shareboard";

const hash = (req,res,next)=>{
    const {userId, password} = req.body;
    if(!userId||!password){
        res.status(400).json({
            message:"you send null"
        })
    }
    req.body.hashPassword = crypto.createHash('sha256', password).update(secrete).digest('hex');
    next();
}

module.exports = hash;