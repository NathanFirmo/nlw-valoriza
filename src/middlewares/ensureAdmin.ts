import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request
    const users_repository = getCustomRepository(UsersRepositories)
    const { admin } = await users_repository.findOne(user_id)

    if (admin) {
        return next()
    }
    return response.status(401).json({
        error: "Unauthorized"
    })
}