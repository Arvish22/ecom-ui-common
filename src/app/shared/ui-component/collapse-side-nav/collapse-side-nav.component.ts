import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-collapse-side-nav',
  templateUrl: './collapse-side-nav.component.html',
  styleUrls: ['./collapse-side-nav.component.scss']
})
export class CollapseSideNavComponent implements OnInit {

  isCollapsed : boolean = true;
  selectedTab : string = 'dashboard';

  @Output() ifCollapsed = new EventEmitter<boolean>();
  @Output() isLoggedOut = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    
    this.selectedTab = this.router.url.split('/')[1];
    this.router.events.forEach((e: any) => {
    if(e instanceof NavigationEnd){
      this.selectedTab = e.url.split('/')[1];
     };  
    });
  }

  doCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.ifCollapsed.emit(this.isCollapsed);
  }

  doLogout(){
    console.log("hello");
    this.isLoggedOut.emit(true);
  }

 

  selectedMenu(menu : string){

    if(!this.isCollapsed){
      this.isCollapsed = !this.isCollapsed;
      this.ifCollapsed.emit(this.isCollapsed);
    }
      
    this.selectedTab = menu;
    console.log(menu);
    let url = '/'+menu.toLowerCase();
    console.log(url);
    this.router.navigate([url]);
  }
}
