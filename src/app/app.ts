import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './component/menu/menu';
import { Formulario } from './component/formulario/formulario';
import { HomeComponent } from './component/home-component/home-component';
import { Lista } from './component/lista/lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Formulario, HomeComponent, Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud_pessoas');
}
