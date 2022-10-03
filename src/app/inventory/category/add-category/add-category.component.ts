import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categories: Category[] = [];
  @Output() isOpened = new EventEmitter<string>();

  constructor(private categoryService : CategoryService) { 
    this.categoryService.categorSubject.subscribe(x=>{
      if(x!=null){
        this.categories = x;
      }
    });
  }

  category : Category = {
    name : ''
  }

  public save(){
    this.categoryService.save(this.category).subscribe({
      next : (data : Category) => {
          this.categories.push(data);
          this.categoryService.categorSubject.next(this.categories);
          this.isOpened.emit('save');
      },
      error : err =>{
        this.isOpened.emit('error');
      }
    });
  }
  
  ngOnInit(): void {
  }

  cancel(){
    this.isOpened.emit('cancel');
  }
}
