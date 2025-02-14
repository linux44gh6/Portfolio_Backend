import { Request, Response } from "express"
import router from "./Routes"
import cors from 'cors'
const express = require('express')


const app = express()

app.use(express.json())

app.use(cors())

app.use('/api',router)

app.get('/', (req:Request, res:Response) => {
  res.send('My PortFolio')
})

export default app