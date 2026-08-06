import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''

  constructor(private pessoaService : PessoaService){}

  save(){
    this.pessoaService.adicionar({
      //id: calcula o ID como o tamanho do array + 1
      id: this.pessoaService.tamanhoArray() +1,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      dataNascimento : this.dataNascimento
    })

    this.limpaAtributos()
  }

  limpaAtributos(){
    this.nome = ''
    this.email = ''
    this.cpf = ''
    this.dataNascimento = ''
  }

}
