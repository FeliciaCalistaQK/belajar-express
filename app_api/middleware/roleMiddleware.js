const roleMiddleware =(requireRole) =>{
    return (req,res,next)=>{
        if(req.user && req.user.role === requireRole){
            next();
        }else{
            res.status(403).json({ message: "Access denied"});
        }
    };
};

module.exports = roleMiddleware;
