import { Request, response, Response } from "express"
import { CreateComplimentsService } from "../services/CreateComplimentsService";


export class CreateComplimentController {
    async handle(request: Request, reponse: Response) {
        const { tag_id, user_sender, user_receiver, message } = request.body

        const createComplimentsService = new CreateComplimentsService()

        const compliment = await createComplimentsService.execute({
            tag_id, 
            user_sender, 
            user_receiver, 
            message
        })

        response.json(compliment)
    }
}