import { PessoaRepository } from "../data/Pessoa.repository";
import { Request, Response } from 'express';
import { Pessoa } from "../models/Pessoa.model";
import Axios from 'axios';
import { Endereco } from "../models/Endereco.models";

const repositoryPessoa = new PessoaRepository();

export class PessoaController {
    listar(request: Request, response: Response) {
        const pessoas = repositoryPessoa.listar();

        return response.json({
            status: 'ok',
            content: pessoas
        })
    }

    async cadastrar(request: Request, response: Response) {
        let { cep, nome, idade } = request.body;
        let endereco: Endereco = (await Axios.get(`http://localhost:3000/getApi/${cep}`)).data.content;
        let pessoa: Pessoa = {
            idPessoa: Math.random(),
            nome,
            idade,
            endereco
        }
        console.log(pessoa);
    }
}
