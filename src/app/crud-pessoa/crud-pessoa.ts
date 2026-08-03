import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-crud-pessoa',
  imports: [FormsModule],
  templateUrl: './crud-pessoa.html',
  styleUrl: './crud-pessoa.css',
})
export class CrudPessoa {
    nome : string = ''
    email : string = ''
    cpf : string = ''
    data_nascimento : string = ''
    uf : string = ''
    municipio : string = ''

   listaPessoas : Pessoa[] = []
   modoEdicao: boolean = false
   pessoaEmEdicao: Pessoa  | null = null

   estados = ['AC', 'AL', 'AP','AM', 'BA', 'CE', 'DF','ES', 'GO', 'MA','MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
   municipios = ['Acre', 'Alagoas','Amapá', 'Amazonas','Bahia', 'Ceará','Distrito Federal' ,'Espírito Santo' , 'Goiás' ,'Maranhão' ,'Mato Grosso' ,'Mato Grosso do Sul' ,'Minas Gerais' ,'Pará' ,'Paraíba' ,'Paraná' ,'Pernambuco' ,'Piauí' ,'Rio de Janeiro' ,'Rio Grande do Norte' ,'Rio Grande do Sul' ,'Rondônia' ,'Roraima' ,'Santa Catarina' ,'São Paulo' ,'Sergipe' ,'Tocantins' ]

   addPessoa(){
    if (this.nome.trim() == '' || this.email.trim() == '' || this.cpf.trim() == ''){
      alert('Preencha todos os campos')
      return
    }

    let pessoa = new Pessoa()
    pessoa.id = this.listaPessoas.length + 1
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.data_nascimento = this.data_nascimento
    pessoa.uf = this.uf
    pessoa.municipio = this.municipio

    this.listaPessoas.push(pessoa)
    
   }

   
}
