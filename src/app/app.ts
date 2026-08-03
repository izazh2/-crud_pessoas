import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudPessoa } from './crud-pessoa/crud-pessoa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrudPessoa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud_pessoas');
}
