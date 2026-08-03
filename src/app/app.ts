import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudPessoa } from './crud-pessoa/crud-pessoa';
import { Consulta } from './consulta/consulta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrudPessoa, Consulta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud_pessoas');
}
