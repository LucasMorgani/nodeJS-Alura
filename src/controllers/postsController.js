import {getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from 'fs'

// Função para listar todos os posts do banco de dados
export async function listarPosts (req, res) {
    const posts = await getTodosPosts(); // Chama a função para buscar todos os posts.
    res.status(200).json(posts); // Retorna os posts no formato JSON com status HTTP 200 (OK).
}

// Função para criar um novo post
export async function postarNovoPost(req, res) { 
    const novoPost = req.body; // Obtém o novo post a partir do corpo da requisição.
    
    try{
        // Tenta criar um novo post no banco de dados.
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado); // Se criar com sucesso, retorna o post criado com status HTTP 200.
    } catch(erro) {
        console.error(erro.message); // Log de erro caso haja falha na criação do post.
        res.status(500).json({"Erro":"Falha na requisição"}); // Retorna erro 500 com uma mensagem de falha.
    }
}

// Função para fazer o upload de uma imagem e criar um post com a imagem
export async function uploadImagem (req, res) { 
    // Cria um novo objeto de post com a URL da imagem e outros campos em branco.
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname, // Usa o nome original da imagem enviada.
        alt: "" // Pode ser preenchido com o texto alternativo, se necessário.
    };

    try{
        // Tenta criar o post com a imagem no banco de dados.
        const postCriado = await criarPost(novoPost);
        
        // Define o caminho onde a imagem será salva com base no ID do post.
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; 
        
        // Renomeia a imagem para o caminho com o ID do post.
        fs.renameSync(req.file.path, imagemAtualizada); 
        
        res.status(200).json(postCriado); // Retorna o post criado com status HTTP 200.
    } catch(erro) {
        console.error(erro.message); // Log de erro caso haja falha na criação do post ou upload da imagem.
        res.status(500).json({"Erro":"Falha na requisição"}); // Retorna erro 500 com uma mensagem de falha.
    }
}
