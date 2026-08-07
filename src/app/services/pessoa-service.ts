import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { of } from 'rxjs';

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

    buscarPorId(id: number) {
        const pessoa = this.pessoas.find(elem => elem.id == id)
        
        return of(pessoa)
      }
    
      editar(pessoa: Pessoa) {
        const posArray = this.pessoas.findIndex(elem => elem.id === pessoa.id)
    
        if (posArray !== -1) {
          this.pessoas[posArray] = pessoa
        }
      }
    
      excluir(id: number) {
        this.pessoas = this.pessoas.filter(elem => elem.id !== id)
      }
    
}
