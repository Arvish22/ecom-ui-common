import { Component, OnInit } from '@angular/core';
import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../auth/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content?: string;
  userName: any;
  user: User | null = null;
  error: any;

  constructor(private userService : UserService,
   
    private authService : AuthService){
      this.userName = userService.getUsername();
    }
 
  ngOnInit(): void {  
  }
}
