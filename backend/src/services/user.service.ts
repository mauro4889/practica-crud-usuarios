import { prisma } from ".."
import { createUserDto } from "../dto/createUser.dto"


export class UserService {
    constructor(){}

    public static async create(user: createUserDto){
        const {firstname, lastname, email} = user
        try {
            const created = await prisma.user.create({
                data:{
                    firstname,
                    lastname,
                    email
                }
            })
            return {success: true, created}
        } catch (error) {
            return {success: false, error:'Hubo un error'}
        }
    }

    public static async getAll(){
        try{
            const data = await prisma.user.findMany()
            return {success: true, data}
        }
        catch(error){
            return {success: false, error:'Hubo un error'}
        }
    }

    public static async getId(ID: any){
        try {
            const data = await prisma.user.findUnique({where:{ID}})
            if (!data){
                throw Error('No se encontro el usuario')
            }
            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}