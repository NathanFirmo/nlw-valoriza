import { ListUserSendComplimentsService } from "../services/ListUserSendCompliments"
import {Request, Response} from "express"

export class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const listUserSendComplimentsService = new ListUserSendComplimentsService()
        const compliments = listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}
