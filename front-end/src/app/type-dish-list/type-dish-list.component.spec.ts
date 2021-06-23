import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDishListComponent } from './type-dish-list.component';

describe('TypeDishListComponent', () => {
  let component: TypeDishListComponent;
  let fixture: ComponentFixture<TypeDishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
