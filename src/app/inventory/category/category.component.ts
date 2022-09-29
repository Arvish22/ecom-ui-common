import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  isEdit: boolean = false;

  constructor(private categoryService : CategoryService) { }

  @Output() isOpened = new EventEmitter<string>();

  category : Category = {
    name : '',
    id : null
  }

  // subCategory : Category = {
  //   name : '',
  //   id : null,
  //   categories : []
  // }

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

 

  public findAll(){
    this.categoryService.findAll().subscribe({
      next : data => {
          this.categories.push(data);
          this.categoryService.categorSubject.next(this.categories);
      }
    });
  }

  cancel(){
    this.isOpened.emit('cancel');
  }

  // public add(){
  //   const category : Category = JSON.parse(JSON.stringify(this.subCategory));
  //   this.subCategory.name = '';
  //   this.category.categories.push(category);
  // }

  addCategory(){
    this.isEdit = true;
  }

  doEdit(val : string){
    if(val == 'cancel'){
      this.isEdit = false;
      alert("closed without save");
    }
    if(val == 'save'){
      this.isEdit = false;
      alert("save");
    }
    if(val == 'error'){
      this.isEdit = false;
      alert("error");
    }
    if(val == 'addItem'){
      this.isEdit = true;
    }
}
}
