import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'nga-navegacao',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navegacao.component.html',
  styleUrl: './navegacao.component.css'
})
export class NavegacaoComponent {
  constructor(private _router: Router){}

  navegarParaHome(){
    this._router.navigate(['/'], {skipLocationChange: true})
  }
}
