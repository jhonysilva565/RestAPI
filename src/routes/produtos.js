// CRUD
// Created
// Read
// Update
// Delete

import { Router } from "express"
import 
  { 
    getAllProdutos,
    createProduto,
    getProdutoById,
    updateProduto,
    deleteProduto
  } from "../controllers/produtosController.js"

const produtos = Router()

produtos
  .get('/',  getAllProdutos)
  .post('/', createProduto)
  .get('/:id', getProdutoById)
  .put('/:id', updateProduto)
  .delete('/:id', deleteProduto)

export default produtos