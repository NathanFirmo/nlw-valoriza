import { NextFunction, Request, Response } from "express";


export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Aqui ficará a verificação de admin

    const admin = true

    if(admin){
        return next()
    }
    return response.status(401).json({
        error: "Unauthorized"
    })
}