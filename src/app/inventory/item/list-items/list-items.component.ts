import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Output() isOpened = new EventEmitter<string>();
  tableHeaders = ["#","Name","Price","Stocks","Actions"];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.isOpened.emit('addItem');
  }

}
