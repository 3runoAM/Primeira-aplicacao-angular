import {Component, OnInit} from '@angular/core';
import {Produto, ProdutoService} from "../shared/produto.service";

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService){}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos()
  }
}
