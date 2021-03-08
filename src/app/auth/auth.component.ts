import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../Utilities/dialog/dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private authService: AuthServiceService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  public state = '';
  id: number;
  isLoading: boolean = false;
  private sub: any;
  Locations: any = [{ location: 'chennai' }, { location: 'hyd' }];

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
      if (this.id == 2) {
        this.router.navigate(['logOut']);
      }
    });
  }
  emailExists: boolean = true;
  Register(formData) {
    if (
      formData.email &&
      formData.password &&
      formData.First &&
      formData.Last &&
      formData.location &&
      formData.mobile
    ) {
      this.authService.saveUser(formData.email, formData.password).subscribe(
        (res) => {
          console.log('Auth Data ', res);
          this.authService.storeUser(formData).subscribe((Response) => {
            console.log('stored data ', Response.Email);
            this._snackBar.open('success', 'Registered', {
              duration: 2000,
            });
            this.router.navigate(['Auth', '1']);
          });
        },
        (err) => {
          console.log('Auth Data ', err);
          this._snackBar.open('User exists already', 'Registered', {
            duration: 2000,
          });

          this.emailExists = false;
        }
      );
    } else {
      this.dialog.open(DialogComponent);
    }
  }
  user = this.authService.isLoggedIn;

  Login(LoginData: NgForm) {
    var email = LoginData.form.value.email;
    var pswd = LoginData.form.value.password;

    if (email && pswd) {
      // var val = new Promise((resolve,reject) => {
      this.isLoading = true;
      console.log('Load ', this.isLoading);

      this.authService.checkDB(email, pswd).subscribe((Response) => {

        this.user = true;

        this.authService.isLoggedIn = true;
        this.isLoading = false;

        if (Response['registered'] == true) {
          this.router.navigate(['app-feature']);
        }
      },
      (error) =>{
        console.error('error caught in component')
        console.log("Pass ",error.error.error.message);
        this._snackBar.open(error.error.error.message, '', {
          duration: 2000,
        });

      }
      );
    }
  }
}
