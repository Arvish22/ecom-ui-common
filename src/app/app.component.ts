import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './auth/models/user';
import { AuthService } from './auth/services/auth.service';
import { TokenStorageService } from './auth/services/token-storage.service';
import { UserService } from './auth/services/user.service';
import { Business } from './shared/models/business';
import { BusinessService } from './shared/service/business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  isCollapsed : boolean = true;
  title = 'ecom-ui-common';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | null = '';
  isSeller: boolean = false;
  isAdmin: boolean = false;
  constructor(private tokenStorageService: TokenStorageService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private businessService : BusinessService) {

    this.userService.userSubject.subscribe({
      next: (data: User | null) => {
        if (data != null) {
          this.username = data.firstName ? data.firstName : data.username;
        }
      }
    });

    this.userService.isAdmin.subscribe({
      next: (data: boolean) => {
        this.isAdmin = data;
      }
    });

    this.userService.isSeller.subscribe({
      next: (data: boolean) => {
        this.isSeller = data;
      }
    });

    this.tokenStorageService.tokenSubject.subscribe(x => {
      this.isLoggedIn = !!this.tokenStorageService.getToken() || x!=null;
      console.log(this.isLoggedIn);
      if (this.isLoggedIn) {

        this.userService.setUserToAppLevel().subscribe({
          next: (user) => {
            console.log(this.isLoggedIn,"fetch user", user);
            this.userService.saveUserDetailsInStorage(user); 
            this.userService.userSubject.next(user);

            this.businessService.setBusinessData(user.id);
            this.router.navigate(['/inventory']);
          }
        })
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const userName = this.userService.getUsername();
    // if(userName != null){
    //   this.userService.setUserToAppLevel().subscribe({
    //     next : (data) =>{
    //       const user : User = JSON.parse(data);

    //       this.userService.userSubject.next(user);
    //     }
    //   })
    // }
  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout(val : boolean): void {
    console.log("logout : ",val);
    if(val){
    this.isLoggedIn = false
    this.tokenStorageService.signOut();
    window.location.reload();
    }
  }

  doExpand(val : boolean){
    this.isCollapsed = val;
    console.log(val);
  }
}
