import express from 'express'

export const app = express()

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo'
    })
})
