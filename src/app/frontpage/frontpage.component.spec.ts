import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import { FrontpageComponent } from './frontpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { DeptcategoryService } from '../shared/deptcategory.service';

describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrontpageComponent],
      imports: [
        HttpClientModule
      ],
      providers: [
        DeptcategoryService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;


    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

    fixture.detectChanges();
  }));

  afterEach(() => {
    httpMock.verify();
  });

});



