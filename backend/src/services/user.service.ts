import { prisma } from ".."
import { createUserDto } from "../dto/createUser.dto"


export class UserService {
    constructor(){}

    public static async create(user: createUserDto){
        const {firstname, lastname, email} = user
        try {
            const data = await prisma. ({
                data:{
                    firstname,
                    lastname,
                    email
                }
            })
            return data
        } catch (error) {
            return console.log(error)
        }
    }
}