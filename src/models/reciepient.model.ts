import {recepientSchema} from '../schema/user.schema.';
import mongoose from 'mongoose';
export const Recepient= mongoose.model("recepient",recepientSchema);
