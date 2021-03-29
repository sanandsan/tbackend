import { string } from '@hapi/joi'
import { Model, Schema} from 'mongoose';
import {Document} from 'mongoose'

export const recepientSchema= new Schema({
    name:{type:String,required:true},
    actualpercent:{type:String,required:true},
    currentpercent:{type:String,required:true},
    updated: { type: Date, default: Date.now },
    status:{type:String,optional:true}
})

