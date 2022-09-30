import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UnitService } from 'src/app/shared/service/unit.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {

  unit : any = { name : ''};
  @Output() isOpened = new EventEmitter<string>();
  units: string[] = [];

  constructor(private unitService : UnitService) {
    this.unitService.unitSubject.subscribe(u=>{
      if(u!=null){
        this.units = u;
      }
    })
   }

  ngOnInit(): void {
  }

  public save(){
    this.unitService.save(this.unit.name).subscribe({
      next : (data : string) => {
          this.units.push(data);
          this.unitService.unitSubject.next(this.units);
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
}
