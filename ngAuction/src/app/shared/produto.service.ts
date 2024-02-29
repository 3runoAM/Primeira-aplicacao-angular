import { Injectable } from '@angular/core';

export class Produto {
  constructor(
    public id: number,
    public titulo: string,
    public preco: number,
    public avaliacao: number,
    public descricao: string,
    public categorias: string[]) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Produto[] {
    return produtos.map(p =>
      new Produto(p.id, p.titulo, p.preco, p.avaliacao, p.descricao, p.categorias));
  }

  getProdutoPorId(produtoId: number): Produto {
    // Asserção de tipo nos permite especificar ao compiler o objeto retornado é do tipo Produto
    // <Produto>produtos.find(p => p.id === produtoId) Sintaxe alternativa
    return produtos.find(p => p.id === produtoId) as Produto;
  }
}

const produtos : Produto[] = [
  {
    'id': 0,
    'titulo': 'Primeiro Produto',
    'preco': 24.99,
    'avaliacao': 4.3,
    'descricao': 'Esta é uma descrição curta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['eletrônicos', 'hardware']},
  {
    'id': 1,
    'titulo': 'Segundo Produto',
    'preco': 34.99,
    'avaliacao': 4.5,
    'descricao': 'Esta é a descrição do segundo produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['livros', 'literatura']
  },
  {'id': 2,
    'titulo': 'Terceiro Produto',
    'preco': 44.99,
    'avaliacao': 4.7,
    'descricao': 'Esta é a descrição do terceiro produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['casa', 'decoração']},
  {
    'id': 3,
    'titulo': 'Quarto Produto',
    'preco': 54.99,
    'avaliacao': 4.9,
    'descricao': 'Esta é a descrição do quarto produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['esportes', 'fitness']},
  {
    'id': 4,
    'titulo': 'Quinto Produto',
    'preco': 64.99,
    'avaliacao': 4.8,
    'descricao': 'Esta é a descrição do quinto produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['jogos', 'videogames']},
  {
    'id': 5,
    'titulo': 'Sexto Produto',
    'preco': 74.99,
    'avaliacao': 4.6,
    'descricao': 'Esta é a descrição do sexto produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categorias': ['roupas', 'moda']
  }
]
