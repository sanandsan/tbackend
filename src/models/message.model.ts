
import mongoose from 'mongoose';
import { messageSchema } from '../schema/product.schema';
export const Message= mongoose.model("message",messageSchema);

