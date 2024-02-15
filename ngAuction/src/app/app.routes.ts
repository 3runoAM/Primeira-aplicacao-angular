import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProdutoDetalhesComponent} from "./produto-detalhes/produto-detalhes.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos/:produtoId', component: ProdutoDetalhesComponent}
];
