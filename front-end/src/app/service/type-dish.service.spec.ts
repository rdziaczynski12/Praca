import { TestBed } from '@angular/core/testing';

import { TypeDishService } from './type-dish.service';

describe('TypeDishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDishService = TestBed.get(TypeDishService);
    expect(service).toBeTruthy();
  });
});
