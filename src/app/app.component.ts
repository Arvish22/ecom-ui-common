import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from './auth/models/user';
import { AuthService } from './auth/services/auth.service';
import { TokenStorageService } from './auth/services/token-storage.service';
import { UserService } from './auth/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'ecom-ui-common';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username : string | null = '';
  constructor(private tokenStorageService: TokenStorageService,
    private userService : UserService,
    private authService : AuthService) { 
      
      this.userService.userSubject.subscribe({
        next : (data : User | null) =>{
          if(data != null){
            this.username = data.username;
          }
        }
      });
    }
  
  ngOnChanges(changes: SimpleChanges): void {
    const userName = this.userService.getUsername();
    if(userName != null){
      this.userService.setUserToAppLevel().subscribe({
        next : (data) =>{
          const user : User = JSON.parse(data);

          this.userService.userSubject.next(user);
        }
      })
    }
  }
 
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.userService.setUserToAppLevel().subscribe({
        next : (data) =>{
          const user : User = JSON.parse(data);
          this.userService.userSubject.next(user);
        }
      })
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
