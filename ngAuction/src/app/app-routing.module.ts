import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetalhesProdutoComponent} from "./detalhes-produto/detalhes-produto.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'products/:productId', component: DetalhesProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
