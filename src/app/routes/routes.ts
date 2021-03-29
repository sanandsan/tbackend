
import * as express from 'express'
import { MessageController } from '../controller/message.controller';
import { HealthController } from './../controller/health.controller';
const expressJoi = require('express-joi-validator');
export class MainRoute{
    messageController :MessageController= new  MessageController();
    // userController :UserController= new UserController();
    // securityController :SecurityController= new SecurityController();

    public  intializeRoute(app:express.Application){

app.get('/api/v1/health',HealthController.getHealth)


//product Opertions
app.post('/api/v1/product',this.messageController.add)

app.get('/api/v1/product',this.messageController.get)


}
}
