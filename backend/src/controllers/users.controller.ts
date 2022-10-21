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

    public static async getAll(req: Request, res: Response){
        const getData = await UserService.getAll()
        res.status(getData.success ? 200 : 400).send(getData)
    }

    public static async getId(req: Request, res: Response){
        const getId = await UserService.getId(req.params.id)
        console.log(req.params)
        res.status(getId.success ? 200 : 400).send(getId)
    }
}