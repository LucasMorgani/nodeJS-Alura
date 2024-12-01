import express from 'express';
import multer from 'multer'
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';

// Rodar esse bloco em ambiente Windows
// O código abaixo configura o armazenamento do multer em um diretório específico
// e define o nome do arquivo a ser salvo no disco.
// O bloco está comentado porque não é necessário em Linux ou Mac.
 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Defina a pasta onde os arquivos serão armazenados
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Usa o nome original do arquivo
//     }
// })
// const upload = multer({ dest: "./uploads, storage"}) // Código de configuração do multer com storage, que está comentado.


// Configura o multer para armazenar arquivos no diretório './uploads'
// Essa configuração é suficiente para Linux ou Mac e usa o nome do arquivo original.
const upload = multer({ dest: "./uploads"}); // Linux ou Mac rodar somente essa linha

// Define as rotas da aplicação
const routes = (app) => {
    app.use(express.json()); // Configura o middleware para interpretar o corpo das requisições como JSON.
    
    // Define a rota GET "/posts" que retorna todos os posts do banco de dados.
    app.get("/posts", listarPosts); 
    
    // Rota para criar um novo post
    app.post('/posts', postarNovoPost)
    
    // Rota para fazer o upload de uma imagem, usando o middleware multer.
    // A chave 'imagem' deve corresponder ao nome do campo do formulário no Postman ou no frontend.
    app.post('/upload', upload.single("imagem"), uploadImagem)
}

export default routes;
