import { TestBed } from '@angular/core/testing';

import { DeptcategoryService } from './deptcategory.service';

describe('DeptcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptcategoryService = TestBed.get(DeptcategoryService);
    expect(service).toBeTruthy();
  });
});
