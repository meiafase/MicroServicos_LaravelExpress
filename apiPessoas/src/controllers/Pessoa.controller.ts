import { PessoaRepository } from "../data/Pessoa.repository";
import { Request, Response } from 'express';
import { Pessoa } from "../models/Pessoa.model";
import Axios from 'axios';
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
        let { cep } = request.body;
        let pessoa: Pessoa = request.body
        await Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
            console.log(res.data);
        });

        pessoa = repositoryPessoa.incluir(pessoa)
    }
}
