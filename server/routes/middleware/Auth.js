import {json} from 'express'

export const UserAuth= async(req,res,next)=>{

    
    if(req.cookies.jwttoken)
    {
        next();
    }
    else{

        res.status(200).json({
            msg:"Please login",
            success:false,
        })
    }
}