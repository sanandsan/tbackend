import { string } from '@hapi/joi'
import { Schema} from 'mongoose';
import * as mongoose from 'mongoose'

export const messageSchema= new Schema({
   content:{type:String},
   count:{type:Number},
   sendCount:{type:Number},
    updated: { type: Date, default: Date.now },
    status:{type:String,optional:true}
})

