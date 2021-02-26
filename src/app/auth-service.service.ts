import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from './users';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  isLoggedIn: boolean = false;

  saveUser(formData) {
    this.http
      .post('http://localhost:3000/posts', {
        Email: formData.email,
        Password: formData.password,
        FirstName: formData.First,
        LastName: formData.Last,
      })
      .toPromise()
      .then(() => {
        console.log('success');
      });
  }

  saveAddProduct(formData) {
    return this.http
      .post<Products>('http://localhost:3000/comments', {
        Name: formData.Name,
        Description: formData.Description,
        Manufacturer: formData.Manufacturer,
        Price: formData.Price,
        Quantity: formData.Quantity,
        completed:false
      })
      .pipe(
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      );
  }

  getProductById(url,id){
    const NewUrl = url + '/'+id;
    return this.http.get<Products[]>(NewUrl);
  }
  updateProduct(url,formData){
    console.log("In update "+formData.Description)
    return this.http.put<Products>(url, {
      Name: formData['Name'],
      Description: formData['Description'],
      Manufacturer: formData['Manufacturer'],
      Price: formData['Price'],
      Quantity: formData['Quantity'],
    }).toPromise().then( (Response) => {
      console.log(Response);
    })
    // .pipe(
    //   catchError((err) => {
    //     throw 'error in source. Details: ' + err;
    //   })
    // );
  }

  deleteProducts(Url) {
    console.log(Url);
   return this.http.delete(Url).toPromise()
   .then( (Response) => {
    console.log(Response+"deleting");
  })

  //  .pipe(
  //       catchError((err) => {
  //         throw 'error in deleting: ' + err;
  //       })
  //     );

  }

  checkDB(email, pswd, callback) {
    this.http.get('http://localhost:3000/posts').subscribe((Response) => {
      for (var i = 0; i < Object.keys(Response).length; i++) {
        if (email == Response[i].Email && pswd == Response[i].Password) {
          this.isLoggedIn = true;
          console.log('10 Success ' + this.isLoggedIn);
          this._snackBar.open(email, 'Logged In', {
            duration: 1000,
          });
          callback(this.isLoggedIn);
          // return this.isLoggedIn;
        } else if (i == Object.keys(Response).length - 1) {
          console.log('Fail sent' + email);
          console.log('Fail got ' + Response[i].Email);

          this._snackBar.open('No User Found ', '', {
            duration: 2000,
          });
          return false;
        }
      }
    });
  }

  LoggedInUser() {
    if (this.isLoggedIn) {
      console.log('Islogged in ' + this.isLoggedIn);
      return true;
    } else {
      console.log('else Islogged in ' + this.isLoggedIn);
      return false;
    }
  }

  getProductSummaryService(url: string) {
    return this.http.get<Products[]>(url);
  }
}
