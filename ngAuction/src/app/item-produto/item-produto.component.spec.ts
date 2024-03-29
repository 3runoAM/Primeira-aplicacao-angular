import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdutoComponent } from './item-produto.component';

describe('ItemProdutoComponent', () => {
  let component: ItemProdutoComponent;
  let fixture: ComponentFixture<ItemProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
