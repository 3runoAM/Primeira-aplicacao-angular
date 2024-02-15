import {Component, Input} from '@angular/core';
import {Produto} from "../servicosCompartilado/produto.service";
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {StarsComponent} from "../stars/stars.component";

@Component({
  selector: 'nga-produto-item',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    StarsComponent
  ],
  templateUrl: './produto-item.component.html',
  styleUrl: './produto-item.component.css'
})

export class ProdutoItemComponent{
  // @INPUT faz com que o componente pai passe o produto para o componente filho
  // @ts-ignore
  @Input() produto: Produto;
}
