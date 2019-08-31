import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptcategoryService {

  public API = '//localhost:8080/api';
  public DEPT_API = '/departments';
  public CAT_API =  '/categories';

  constructor(private http: HttpClient) {
  }

  getAllDepts(): Observable<any> {
    return this.http.get(this.API + this.DEPT_API);
  }


  getAllCats(): Observable<any> {
    return this.http.get(this.API + this.CAT_API);
  }

}
