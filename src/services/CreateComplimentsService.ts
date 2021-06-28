import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}
export class CreateComplimentsService {
    async execute({message, tag_id, user_receiver, user_sender} : IComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const usersRepository = getCustomRepository(UsersRepositories)

        const userReiverExists = await usersRepository.findOne(user_receiver)

        if(user_receiver === user_sender){
            throw new Error("User receiver cannot be equal user sender!")
        }

        if(!userReiverExists){
            throw new Error ("User receiver does no exists1")
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        complimentsRepository.save(compliment)

        return compliment
    }
}