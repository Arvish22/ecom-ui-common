import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from 'src/app/shared/models/item';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Category } from 'src/app/shared/models/category';
import { UnitService } from 'src/app/shared/service/unit.service';
import { ItemService } from 'src/app/shared/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemForm: any;
  isCategoryOpen: boolean = false;
  isUnitOpen : boolean = false;
  @Output() isOpened = new EventEmitter<string>();
  categories: Category[] = [];
  units: string[] = [];
  items: Item[] = [];

  constructor(private fb: FormBuilder,
    private categoryService : CategoryService,
    private unitService : UnitService,
    private itemService : ItemService) { 

    this.categoryService.categorSubject.subscribe((res : Category[] | null) =>{
      if(res != null)
        this.categories = res;
    });

    this.unitService.unitSubject.subscribe((res : string[] | null) =>{
      if(res != null)
        this.units = res;
    });
  }

  ngOnInit(): void {

    this.itemForm = this.fb.group({
      name :[''],
      discount : [''],
      price : [''],
      skuId : [''],
      stocks : [''],
      unit : [''],
      category : ['']
    });
  }

  public save(val : Item){
    this.itemService.save(val).subscribe({
      next : (data : Item) => {
          this.items.push(data);
          this.itemService.itemSubject.next(this.items);
          this.isOpened.emit('save');
      },
      error : err =>{
        this.isOpened.emit('error');
      }
    });
  }

  cancel(){
    this.isOpened.emit('cancel');
  }

  openCategory(){
    this.isCategoryOpen = true;
  }

  openUnit(){
    this.isUnitOpen = true;
  }

  closePop(val : string){
    if(val == 'cancel'){
      this.isCategoryOpen = false;
      this.isUnitOpen = false;
      alert("closed without save");
    }
    if(val == 'save'){
      this.isCategoryOpen = false;
      this.isUnitOpen = false;
      alert("save");
    }
    if(val == 'error'){
      this.isCategoryOpen = false;
      this.isUnitOpen = false;
      alert("error");
    }
  }
}
