import { Component, OnInit} from '@angular/core';
import {ProdutoItemComponent} from "../produto-item/produto-item.component";
import {Produto, ProdutoService} from "../servicosCompartilado/produto.service";
import {ActivatedRoute} from "@angular/router";
import {StarsComponent} from "../stars/stars.component";

@Component({
  selector: 'nga-produto-detalhes',
  standalone: true,
  imports: [
    StarsComponent
  ],
  templateUrl: './produto-detalhes.component.html',
  styleUrl: './produto-detalhes.component.css'
})
export class ProdutoDetalhesComponent implements OnInit {
  // @ts-ignore
  produto: Produto;
  constructor(private route: ActivatedRoute,
              private produtoService: ProdutoService) {}

  ngOnInit() {
    // Extrai e converete o id do produto que vem da rota
    const produtoId: number = parseInt(this.route.snapshot.params['produtoId']);
    // @ts-ignore
    this.produto = this.produtoService.getProdutoPorId(produtoId);
  }
}
