import { Recepient } from "../../models/reciepient.model"
import {Request,response,Response} from 'express'
import { Calculations } from "../../services/calculate.service";
import { Message } from "../../models/message.model";

export class RecepientController{

      
    async add(request:Request,response:Response){
        try{
        console.log(request.body);
        const rec= new Recepient(request.body);
        const res=await rec.save();
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
       const rec=await Recepient.findById(request.params._id);
        response.status(200).json(rec)
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }

    async getAll(request:Request,response:Response){
        try{
        console.log(request.params._id);
       const recs=await Recepient.find();
        response.status(200).json(recs)
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }


   async  sendMessage(request:Request,response:Response){
//step 1 find eq perc for one messa
//using a loop that start from eq message count , default completed message count 0, if message model has a completed message count  , then i=completed message perc; i< totatl mesage countperc;i+ onemsgequalentperc
//step 2loop through recptns and find the highest priority one by comparing actual and current priority in recp model
//if priorities are equal continue the same one and send message and when percentage/prio changes 
// step 3 if message send change the total send count in the message model and also perticular user model

//

      const message=await Message.find().exec();  
      if(message.length<=0){
          return response.status(404).json({message: "message not found"})
      }
   const oneNumPerc= Calculations.calcEqPerc(message[0].count)
const iValue= (message[0].sendCount>0) ? message[0].sendCount:0;
   for(const i=iValue;i<oneNumPerc*100;i+oneNumPerc)
   {

   }
    }

   
  
}