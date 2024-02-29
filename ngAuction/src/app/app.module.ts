import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemProdutoComponent } from './item-produto/item-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EstrelasComponent } from './estrelas/estrelas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    FooterComponent,
    NavbarComponent,
    ItemProdutoComponent,
    DetalhesProdutoComponent,
    PesquisaComponent,
    EstrelasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
