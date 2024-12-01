import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gatinho fofinho dormindo",
        imagem: "https://placecats.com/sleep/300/150",
    },
    {
        id: 3,
        descricao: "Gato brincando no jardim",
        imagem: "https://placecats.com/play/300/150",
    },
    {
        id: 4,
        descricao: "Gato preto misterioso",
        imagem: "https://placecats.com/blackcat/300/150",
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://placecats.com/window/300/150",
    },
    {
        id: 6,
        descricao: "Gato de olhos azuis",
        imagem: "https://placecats.com/blueeyes/300/150",
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts(params){
    const db = conexao.db('imersao-instabyte')
    const colecao = db.collection('posts')
    return colecao.find().toArray()
}

app.get("/posts", async (req, res) => {
        const posts = await getTodosPosts()
        res.status(200).json(posts);
    });

//app.get("/posts/:id", (req, res) => {
//  const index = buscarPostPorID(req.params.id)
//    res.status(200).json();
//});

//function buscarPostPorID(id){
//    return posts.findIndex((post) => {
//        return post.id === Number(id)
//    });
//}
