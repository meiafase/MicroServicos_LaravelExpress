import { Router } from 'express';
import { PessoaController } from '../controllers/Pessoa.controller';

const router: Router = Router();

router.get('/getPessoa', new PessoaController().listar);
router.post('/newPessoa', new PessoaController().cadastrar)

export { router }