import mongoose from "mongoose";

const produtosSchema = new mongoose.Schema(
  {
    nome: String,
    preco: Number,
  }
)

const produtosModel = mongoose.model("produtos", produtosSchema);

export default produtosModel;