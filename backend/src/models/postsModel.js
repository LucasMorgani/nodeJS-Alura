// Importa a função de conexão com o banco de dados.
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão definida nas variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para obter todos os posts do banco de dados.
export async function getTodosPosts() {
    const db = conexao.db('imersao-instabyte'); // Acessa o banco de dados 'imersao-instabyte'.
    const colecao = db.collection('posts'); // Obtém a coleção 'posts' dentro do banco de dados.
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db('imersao-instabyte'); 
    const colecao = db.collection('posts'); 
    return colecao.insertOne(novoPost); 
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db('imersao-instabyte'); 
    const colecao = db.collection('posts'); 
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}); 
}
