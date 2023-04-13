import { Endereco } from "./Endereco.models"

export interface Pessoa {
    idPessoa?: string,
    nome?: string,
    idade?: number,
    endereco: Endereco
}