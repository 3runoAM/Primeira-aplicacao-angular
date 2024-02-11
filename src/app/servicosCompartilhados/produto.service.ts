import { Injectable } from '@angular/core';

@Injectable({ // Permite que o serviço seja injetado em outros componentes
  providedIn: 'root'// informa que o serviço será injetado em toda a aplicação
})

export class ProdutoService {
  constructor() { }
}
