import { PessoaRepository } from "../data/Pessoa.repository";
import { Request, Response } from 'express';
import { Pessoa } from "../models/Pessoa.model";
import Axios from 'axios';
import { Endereco } from "../models/Endereco.models";
//import crypto from "crypto";

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
        let { cep, idPessoa, nome, idade } = request.body;
        let endereco: Endereco;
        await Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
            endereco = res.data;
            let pessoa: Pessoa = {
                idPessoa: idPessoa,
                nome: nome,
                idade: idade,
                endereco
            }

            pessoa = repositoryPessoa.incluir(pessoa)
        });
    }
}
