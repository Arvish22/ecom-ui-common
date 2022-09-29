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

  chartOptions = {
	  title: {
		  text: "Angular Column Chart with Index Labels"
	  },
	  animationEnabled: true,
	  axisY: {
		includeZero: true
	  },
	  data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
		dataPoints: [
			{ x: 10, y: 71 },
			{ x: 20, y: 55 },
			{ x: 30, y: 50 },
			{ x: 40, y: 65 },
			{ x: 50, y: 71 },
			{ x: 60, y: 92, indexLabel: "Highest\u2191" },
			{ x: 70, y: 68 },
			{ x: 80, y: 38, indexLabel: "Lowest\u2193"  },
			{ x: 90, y: 54 },
			{ x: 100, y: 60 }
		]
	  }]
	}
}
