import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
     try{
     const{ token }= req.headers;
        if(!token){
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const token_decode= jwt.verify(token, process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(401).json({ message: "Token is not valid" });
        }
        next();
     }
     catch(error){

        res.status(500).json({ message: "Server error" });

     }
}

export default adminAuth;