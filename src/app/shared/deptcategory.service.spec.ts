import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DeptcategoryService } from './deptcategory.service';

describe('DeptcategoryService', () => {
  let injector: TestBed;
  let service: DeptcategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeptcategoryService]
    });
    injector = getTestBed();
    service = injector.get(DeptcategoryService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should be created', () => {
    service = TestBed.get(DeptcategoryService);
    expect(service).toBeTruthy();
  });
});
