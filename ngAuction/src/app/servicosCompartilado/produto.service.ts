import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  getProdutos(): Produto[] {
    return produtos.map(p => new Produto(p.id, p.titulo, p.preco, p.avaliacao, p.descricao, p.categorias));
  }

  getProdutoPorId(produtoId: number): Produto {
    return <Produto>produtos.find(p => p.id === produtoId);
  }
}

export class Produto{
  constructor(
    public id: number,
    public titulo: string,
    public preco: number,
    public avaliacao: number,
    public descricao: string,
    public categorias: string[]) {}
}

const produtos: Produto[] = [{
  'id': 0,
  'titulo': 'Primeiro produto',
  'preco': 24.99,
  'avaliacao': 4.3,
  'descricao': 'Pequena descrição do produto UM. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Eletrônicos', 'hardware']
}, {
  'id': 1,
  'titulo': 'Segundo Produto',
  'preco': 64.99,
  'avaliacao': 3.5,
  'descricao': 'Pequena descrição do produto DOIS. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Livros']
}, {
  'id': 2,
  'titulo': 'Terceiro Produto',
  'preco': 74.99,
  'avaliacao': 4.5,
  'descricao': 'Pequena descrição do produto TRES. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Casa', 'Decoração']
}, {
  'id': 3,
  'titulo': 'Quarto Produto',
  'preco': 54.99,
  'avaliacao': 4.0,
  'descricao': 'Pequena descrição do produto QUATRO. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Jardim']
}, {
  'id': 4,
  'titulo': 'Quinto Produto',
  'preco': 84.99,
  'avaliacao': 3.8,
  'descricao': 'Pequena descrição do produto CINCO. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Esportes']
}, {
  'id': 5,
  'titulo': 'Sexto Produto',
  'preco': 94.99,
  'avaliacao': 4.7,
  'descricao': 'Pequena descrição do produto SEIS. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categorias': ['Moda']
}
];


