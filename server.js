import express from 'express'; // Importa o framework Express para criar e gerenciar um servidor web.
import routes from './src/routes/postsRoutes.js';

const app = express(); // Cria uma instância do aplicativo Express.
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor começa a escutar.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
