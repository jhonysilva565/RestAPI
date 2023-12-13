import express from 'express'
export const app = express()
import router from './routes/produtos.js'
app.use('/produtos', router)
