import {Component, OnInit} from '@angular/core';
import {Produto, ProdutoService} from "../shared/produto.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'nga-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  // @ts-ignore
  produto: Produto;

  constructor(private route: ActivatedRoute,
              private productService: ProdutoService) { }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId']);

    this.produto = this.productService.getProdutoPorId(prodId);
  }
}
