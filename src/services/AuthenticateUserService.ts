import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";
import "dotenv"

interface IAuthenticationRequeste {
    email: string,
    password: string
}

export class AuthenticateUserService {
    async execute({ email, password }: IAuthenticationRequeste) {
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = usersRepository.findOne(email)

        if (!user) {
            throw new Error("Email/Password incorrect!")
        }

        const passwordMatch = await compare(password, (await user).password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect!")
        }

        const token = sign(
            {
                email: (await user).email
            },
            process.env.MD5HASH,
            {
                subject: (await user).id,
                expiresIn: "1d"
            }

        )
    }
}