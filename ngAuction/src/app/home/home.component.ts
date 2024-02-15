import {Component, OnInit} from '@angular/core';
import {CarrosselComponent} from "../carrossel/carrossel.component";
import {Produto, ProdutoService} from "../servicosCompartilado/produto.service";
import {NgForOf} from "@angular/common";
import {ProdutoItemComponent} from "../produto-item/produto-item.component";


@Component({
  selector: 'nga-home',
  standalone: true,
  imports: [
    CarrosselComponent,
    NgForOf,
    ProdutoItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

  // Como é private o Angular já cria a variável e atribui o valor
  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }
}
