import {Component, Input} from '@angular/core';
import {Produto} from "../shared/produto.service";

@Component({
  selector: 'nga-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrl: './item-produto.component.css'
})
export class ItemProdutoComponent {
  // @ts-ignore
  @Input() produto: Produto;
}
