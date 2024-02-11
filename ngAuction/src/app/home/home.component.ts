import { Component } from '@angular/core';
import {CarrosselComponent} from "../carrossel/carrossel.component";


@Component({
  selector: 'nga-home',
  standalone: true,
  imports: [
    CarrosselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
