import { Component, OnInit } from '@angular/core';
import { DeptcategoryService } from '../shared/deptcategory.service'

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  departments: Array<any>;
  categories: Array<any>;
  

  constructor(private deptcategoryService: DeptcategoryService) { }

  ngOnInit() {
    this.deptcategoryService.getAllDepts().subscribe(data => {
      this.departments = data;



    });

    this.deptcategoryService.getAllCats().subscribe(data => {
      this.categories = data;
    });
  }

  

}
