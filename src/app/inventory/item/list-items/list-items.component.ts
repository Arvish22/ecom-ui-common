import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { ItemService } from 'src/app/shared/service/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Output() isOpened = new EventEmitter<string>();
  tableHeaders = ["#","Name","Price","Stocks","Actions"];
  items: Item[] | null = null;

  constructor(private itemService : ItemService) {
    this.itemService.itemSubject.subscribe(i=>{
      this.items = i;
    });
   }

  ngOnInit(): void {
  }

  addItem(){
    this.isOpened.emit('addItem');
  }
  
  delete(item : Item){}

  editItem(item : Item){}
}
