import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  isEdit: boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closePop(val : string){
    this.isEdit = false;
  }

  addUnit(){
    this.isEdit = true;
  }
}
