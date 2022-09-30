import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  num : number[] =[];
  isItemEdit: boolean = false;
  selectedTab : string = "Items";
  isEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  switchTab(val : string){
    this.selectedTab = val;
  }

  createOrder(){
    this.isEdit = true;
  }
}
