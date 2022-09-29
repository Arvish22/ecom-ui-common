import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  
  num : number[] =[];
  isItemEdit: boolean = false;
  selectedTab : string = "Items";
  constructor() { }

  ngOnInit(): void {
  }

  switchTab(val : string){
    this.selectedTab = val;
  }

  doItemEdit(val : string){
    if(val == 'cancel'){
      this.isItemEdit = false;
      alert("closed without save");
    }
    if(val == 'save'){
      this.isItemEdit = false;
      alert("save");
    }
    if(val == 'error'){
      this.isItemEdit = false;
      alert("error");
    }
    if(val == 'addItem'){
      this.isItemEdit = true;
    }
  }

}
