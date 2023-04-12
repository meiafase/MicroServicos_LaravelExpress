import { Pessoa } from '../models/Pessoa.model';

let pessoas: Pessoa[] = [];

export class PessoaRepository {
    listar(): Pessoa[] {
        return pessoas;
    }

    incluir(pessoa: Pessoa): Pessoa {
        pessoas.push(pessoa);
        return pessoa
    }

    buscar(idPessoa: string): Pessoa[] {
        return pessoas.filter((p) => p.idPessoa === idPessoa)
    }

    deletar(idPessoa: string): Pessoa[] {
        const index = pessoas.findIndex((p) => p.idPessoa === idPessoa);
        if(index != -1) {
            pessoas.splice(index, 1);
        }
        return pessoas;
    }

    // alterar(pessoa: Pessoa): Pessoa {
    //     const index = pessoas.findIndex((p) => p.idPessoa === pessoa.idPessoa)
    // }
}