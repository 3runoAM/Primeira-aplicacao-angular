import { Component } from '@angular/core';
import {ProdutoService} from "../servicosCompartilhados/produto.service";
import {NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

class Produto {
  id: number;
  nome: string;
  preco: number;
  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})

export class ProdutoComponent {
  listaProdutos: Array<Produto> = [new Produto(1, 'Produto 1', 100),
    new Produto(2, 'Produto 2', 200),
    new Produto(3, 'Produto 3', 300)];
  constructor(produtoService: ProdutoService) { // Injeção de dependência
  }
}
