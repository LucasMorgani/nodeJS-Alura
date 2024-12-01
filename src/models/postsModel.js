// Importa a função de conexão com o banco de dados.
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão definida nas variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para obter todos os posts do banco de dados.
export default async function getTodosPosts() {
    const db = conexao.db('imersao-instabyte'); // Acessa o banco de dados 'imersao-instabyte'.
    const colecao = db.collection('posts'); // Obtém a coleção 'posts' dentro do banco de dados.
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array.
}