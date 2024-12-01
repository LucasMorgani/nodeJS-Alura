import express from 'express';
import { listarPosts, postarNovoPost } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json()); // Configura o middleware para interpretar o corpo das requisições como JSON.
    app.get("/posts", listarPosts); // Define a rota GET "/posts" que retorna todos os posts do banco de dados.
    app.post('/posts', postarNovoPost) // Rota para criar um post
}

export default routes;
