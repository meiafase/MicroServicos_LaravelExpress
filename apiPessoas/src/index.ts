import express from 'express';
import { router } from './configs/Routes';
import Pessoa from './models/tables/Pessoa.models.tables';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.clear();
    console.log(`Aplicação PESSOAS rodando na porta ${PORT}`);
})