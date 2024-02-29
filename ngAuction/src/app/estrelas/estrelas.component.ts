import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nga-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrl: './estrelas.component.css'
})

export class EstrelasComponent implements OnInit {
  @Input() contagem = 5;
  @Input() avaliacao = 0;
  estrelas: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.contagem; i++) {
      this.estrelas.push(i > this.avaliacao);
    }
  }
}
