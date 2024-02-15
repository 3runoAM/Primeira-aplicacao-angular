import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'nga-stars',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit {
  // Esses dados são passados para o componente stars
  @Input() cont = 5; // (default: 5)
  @Input() avaliacao = 0;

  // O array stars é preenchido com valores booleanos representando as
  // estrelas, true para estrelas preenchidase false para estrelas vazias
  estrelas: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.cont; i++) {
      // Preenche o array estrelas com valores booleanos representando as estrelas de acordo com o avaliacao vindo do input
      this.estrelas.push(i > this.avaliacao);
    }
  }
}
