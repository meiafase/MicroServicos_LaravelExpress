import { Endereco } from "./Endereco.models"

export interface Pessoa {
    idPessoa?: string,
    nome?: string,
    idade?: number,
    cep?: string,
    endereco?: Endereco
}