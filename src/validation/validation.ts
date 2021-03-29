
import {Request,Response,NextFunction} from 'express'
import  * as Joi from 'joi'

export const validateRequest = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    const { error }:any =Joi.valid(req.body, schema);

    if (error) {  
      throw new Error(error);
    }

    return next();
  };

