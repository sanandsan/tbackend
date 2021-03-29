import {Request,Response} from 'express'
import { Message } from '../../models/message.model';


export class MessageController{

    
    async add(request:Request,response:Response){
        try{
        console.log(request.body);
        const message= new Message(request.body);
        const res=await message.save();
        response.status(200).json({message:res})
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }
    
    async get(request:Request,response:Response){
        
        try{
        console.log(request.params._id);
       const message=await Message.findById(request.params._id);
        response.status(200).json(message)
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }

   
  


    }
    
   

