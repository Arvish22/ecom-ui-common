import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {

  unit : any = { name : ''};
  @Output() isOpened = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    // this.categoryService.save(this.category).subscribe({
    //   next : data => {
    //       this.categories.push(data);
    //       this.categoryService.categorSubject.next(this.categories);
    //       this.isOpened.emit('save');
    //   },
    //   error : err =>{
    //     this.isOpened.emit('error');
    //   }
    // });
    this.isOpened.emit('error');
  }

  cancel(){
     this.isOpened.emit('cancel');
  }
}
