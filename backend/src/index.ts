import { PrismaClient } from '@prisma/client'
import express from 'express'
import { serverConfig } from './config'
import usersRoutes from './routes/users.routes'
import cors from 'cors'

const server = express()
export const prisma = new PrismaClient()

server.use(express.json())
server.use(cors())
server.use('/users', usersRoutes)


server.listen(serverConfig.PORT, ()=>{
    console.log(`Server ejecutandose en el puerto ${serverConfig.PORT}`)
})