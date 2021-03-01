import { Component, OnChanges, OnInit } from '@angular/core';
import {Form, FormControl, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../Utilities/dialog/dialog.component';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http:HttpClient,
              private authService:AuthServiceService,
              private router:Router,
              private _snackBar: MatSnackBar ,
              private dialog:MatDialog,
              private route: ActivatedRoute) {}

    public state = '';
    id: number;
    private sub: any;
    Locations :any= [{location:'chennai'},{location:'hyd'}];


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    console.log(this.id);
      // In a real app: dispatch action to load the details here.
      if(this.id == 2){
        this.router.navigate(['logOut']);
      }
   });
  }


  Register(formData){
    if(formData.email && formData.password && formData.First && formData.Last && formData.location && formData.mobile){
        this.authService.saveUser(formData);
        this._snackBar.open("success",'Registered',{
          duration:2000
        });
        this.router.navigate(['Auth','1']);
      }
    else{

      this.dialog.open(DialogComponent);
    }
  }
  user = this.authService.isLoggedIn;

  async Login(LoginData:NgForm){

    var email = LoginData.form.value.email;
    var pswd = LoginData.form.value.password;
    if(email && pswd){
      // var val = new Promise((resolve,reject) => {
        await this.authService.checkDB(email,pswd,(status) => {
          // console.log(status)
          console.log("11 val"+Response);

          LoginData.resetForm();
          this.user = this.authService.isLoggedIn;
          console.log("12 isLoggedIn "+this.authService.isLoggedIn);
          this.router.navigate(['about']);


      });
    }
    else{
      LoginData.resetForm();
      this.dialog.open(DialogComponent);
    }
  }



}
