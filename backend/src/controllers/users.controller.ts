import { UserService } from "../services/user.service"
import { Request, Response } from "express"


export class UsersController{
    constructor(){}

    public static async create(req: Request, res: Response){
        const {firstname, lastname, email} = req.body
        const data = await UserService.create({
            firstname,
            lastname,
            email
        })
        res.send(data)
    }
}