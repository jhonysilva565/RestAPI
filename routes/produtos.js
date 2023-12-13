import express from 'express'
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando o GET para a rota produtos!'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).send ({
        message: 'Usando o método POST para a rota produtos'
    })
})

router.get('/id:produto', (req, res, next) => {
    res.status(200).send({
            
    })
})