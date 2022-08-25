import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService : CategoryService) { }

  category : Category = {
    name : '',
    id : null,
    categories : []
  }

  subCategory : Category = {
    name : '',
    id : null,
    categories : []
  }

  categories : Category[]  = [];

  ngOnInit(): void {
    this.findAll();
    this.categoryService.categorSubject.subscribe({
      next : (data : Category[] | null) =>{

        if(data != null)
          this.categories = data;
      }
    });
  }

  public save(){
    this.categoryService.save(this.category).subscribe({
      next : data => {
          this.categories.push(data);
          this.categoryService.categorSubject.next(this.categories);
      }
    });
  }

  public findAll(){
    this.categoryService.findAll().subscribe({
      next : data => {
          this.categories.push(data);
          this.categoryService.categorSubject.next(this.categories);
      }
    });
  }

  public add(){
    const category : Category = JSON.parse(JSON.stringify(this.subCategory));
    this.subCategory.name = '';
    this.category.categories.push(category);
  }
}
