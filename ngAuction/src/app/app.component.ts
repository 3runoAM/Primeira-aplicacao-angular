import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CarrosselComponent} from "./carrossel/carrossel.component";
import {NavegacaoComponent} from "./navegacao/navegacao.component";
import {PesquisaComponent} from "./pesquisa/pesquisa.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'nga-root',
  standalone: true,
  imports: [RouterOutlet, NavegacaoComponent, PesquisaComponent, FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngAuction';
}
