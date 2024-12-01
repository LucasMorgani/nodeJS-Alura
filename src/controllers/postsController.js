import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts (req, res) {
    const posts = await getTodosPosts(); // Chama a função para buscar os posts.
    res.status(200).json(posts); // Retorna os posts no formato JSON com status HTTP 200 (OK).
}

export async function postarNovoPost(req, res) { 
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}
