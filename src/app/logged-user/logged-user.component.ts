import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }
  CurrentUser;
  Name;
  first;last;
  location;
  contact;
  ngOnInit(): void {
    this.CurrentUser=this.authService.LoggedInAgent;
    console.log("Current ",this.CurrentUser)
    this.authService.DisplayUsers(this.CurrentUser).subscribe((Response)=>{
      console.log(Response);
      this.Name = Response['Email'];
      this.first = Response['FirstName'];
      if(Response['LastName'] == '')
      this.last = 'NA'
      else
      this.last = Response['LastName'];
      this.location = Response['Location']
      this.contact = Response['Mobile']
    });

  }

}
