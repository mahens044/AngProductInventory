import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngProductInventory';

  constructor(private router:Router,
              private authService:AuthServiceService){
  }

  ngOnInit():void{
    this.router.navigate(['Auth',1]);
  }
  user = this.authService.isLoggedIn;
  ngDoCheck() {
    console.log("Inside ngDoCheck")
    this.user = this.authService.isLoggedIn;
  }
  Auth(id:string){

    this.router.navigate(['Auth',id]);
    // this.user = this.authService.isLoggedIn;
    console.log("isLoggedIn "+this.authService.isLoggedIn);
    console.log("user  "+this.user);

  }
}
