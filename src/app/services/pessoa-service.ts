import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root',
})
export class PessoaService {

    //Array privado que armazena todas as pessoas cadastradas
    private pessoas: Pessoa[] = []

    //Adicionar uma nova pessoa
    adicionar(pessoa: Pessoa){
        this.pessoas.push(pessoa)
    }

    //Retorna todas as pessoas cadastradas
    listar(){
        return this.pessoas
    }

    tamanhoArray(){
        //Retorna a quantidade de elementos no array usando .length
        return this.pessoas.length
    }
}
