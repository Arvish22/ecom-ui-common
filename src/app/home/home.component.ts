import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content?: string;
 
  ngOnInit(): void {
   
  //   this.userService.getPublicContent().subscribe({
  //     next : (data : any) => {
  //       this.content = data;
  //     },
  //     error : (err : any) => {
  //       this.content = JSON.parse(err.error).message;
  //     }
  // });
  }
}
