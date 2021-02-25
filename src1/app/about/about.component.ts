import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    //  this.authService.LoggedInUser();

     if(!this.authService.isLoggedIn){
       console.log(this.authService.isLoggedIn);
      // alert('Unauthorized');
     }

  }

}
