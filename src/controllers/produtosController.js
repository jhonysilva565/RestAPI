import Produto from '../models/Produtos.js';
import mongoose from 'mongoose';

// GET /produtos
const getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find({});

    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /produtos/:id
const getProdutoById = async (req, res) => {
  const { id } = req.params
  
  try {
    const produto = await Produto.findById(new mongoose.Types.ObjectId(id))

    if(!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    res.status(200).json(produto)

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

// POST /produtos
const createProduto = async (req, res) => {
  const { nome, preco } = req.body

  const newProduto = new Produto({
    nome,
    preco
  })

  try {
    const Produto = await newProduto.save();
    res.status(201).json(Produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /produtos/:id
const updateProduto = async (req, res) => {
  const { id } = req.params
  const { nome, preco } = req.body

  try {
    const produto = await Produto.findById(new mongoose.Types.ObjectId(id))

    if(!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    if(nome) {
      produto.nome = nome
    }

    if(preco){
      produto.preco = preco
    }

    await produto.save()

    res.status(200).json(produto)

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE /produtos/:id
const deleteProduto = async (req, res) => {
  const { id } = req.params

  try {
    const produto = await Produto.findById(new mongoose.Types.ObjectId(id))

    if(!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    await Produto.deleteOne({ _id: id })

    res.status(200).json({ message: 'Produto removido com sucesso' })

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}


export { 
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto
 }