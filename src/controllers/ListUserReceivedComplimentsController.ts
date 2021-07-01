
import {Request, Response} from "express"
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService.ts"

export class ListUserReceivedComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService()
        const compliments = listUserReceivedComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}
