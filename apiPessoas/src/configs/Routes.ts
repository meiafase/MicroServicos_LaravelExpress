import { Router } from 'express';
import { PessoaController } from '../controllers/Pessoa.controller';
import { EnderecoController } from '../controllers/Endereco.controller';

const router: Router = Router();

router.get('/getPessoa', new PessoaController().listar);
router.post('/newPessoa', new PessoaController().cadastrar);
router.get('/getApi/:cep', new EnderecoController().getApi);

export { router }