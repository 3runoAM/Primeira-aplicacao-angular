import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavegacaoComponent} from "./navegacao/navegacao.component";
import {PesquisaComponent} from "./pesquisa/pesquisa.component";
import {FooterComponent} from "./footer/footer.component";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

@Component({
  selector: 'nga-root',
  standalone: true,
  imports: [RouterOutlet, NavegacaoComponent, PesquisaComponent, FooterComponent, RouterLink],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { }
