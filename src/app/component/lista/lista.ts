import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  constructor(private pessoaService: PessoaService){}

  //Retorna a lista de todas as pessoas cadastradas
  listar(){
    return this.pessoaService.listar()
  }
}
