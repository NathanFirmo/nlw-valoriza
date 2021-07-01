import { response } from "express";
import { ListUsersService } from "../services/ListUsersService";


export class ListUsersController {
    async handle() {
        const listUsersService = new ListUsersService()
        const users = await listUsersService.execute()

        return response.json(users)
    }
}