import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from './productsModel';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Users} from './userModel';
import {v4 as uuidv4} from 'uuid';
// import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  isLoggedIn: boolean = false;
  LoggedInAgent: string;

  //Registering the User
  saveUser(email,pswd) {
   return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtez1TmEVRBSWpO0HP-xEDe2xIt2YFSPg',
        {
          email: email,
          password: pswd,
          returnSecureToken: true,
        }
      )
  }

  storeUser(formData){
   return this.http
      .post<Users>('https://capstoneangular-default-rtdb.firebaseio.com/users/profile.json',{
        Email: formData.email,
        FirstName: formData.First,
        LastName: formData.Last,
        Mobile:formData.mobile,
        Location : formData.location
      })

  }
  //Checking the LoggedIn User
  checkDB(email, pswd) {
    this.LoggedInAgent = email;
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtez1TmEVRBSWpO0HP-xEDe2xIt2YFSPg',
      {
        email: email,
        password: pswd,
        retrurnSecureToken: true,
      }
    );
  }

  DisplayUsers(user: string) {
    return this.http
    .get('https://capstoneangular-default-rtdb.firebaseio.com/users/profile.json?Email' + user);
  }
  //Adding new Product
  saveAddProduct(formData) {
    return (
      this.http
        .post<Products>(
          'https://capstoneangular-default-rtdb.firebaseio.com/products.json',
          {
            Name: formData.Name,
            Description: formData.Description,
            Manufacturer: formData.Manufacturer,
            Price: formData.Price,
            Quantity: formData.Quantity,
            completed: false,
            views: 0
            // ,
            // id:1
            // id:uuidv4()
          }
        )
        // .subscribe((Response)=>{
        //   console.log(Response);
        // })
        .pipe(
          catchError((err) => {
            throw 'error in source. Details: ' + err;
          })
        )
    );
  }

  //Getting Product By Id
  getProductById(url, id) {
    const NewUrl = url +'.json';
    console.log("Viewing ",NewUrl);
    return this.http.get<Products[]>(NewUrl);
  }

  //Getting product summary
  getProductSummaryService() {
    return this.http
    .get<Products[]>('https://capstoneangular-default-rtdb.firebaseio.com/products.json')
    .pipe(
      map((Response) => {
        console.log('Before map ', Response);
        const ListOfProd = [];

        for (const key in Response) {
          if (Response.hasOwnProperty(key)) {
            ListOfProd.push({ ...Response[key], id: key });
          }
        }
        console.log('List of products ', ListOfProd);
        return ListOfProd;
      })
    )
;

  }
  //Update Product
  updateProduct(url, formData) {
    console.log('In update ' + formData.Description);
    return this.http
      .patch<Products>(url, {
        Name: formData['Name'],
        Description: formData['Description'],
        Manufacturer: formData['Manufacturer'],
        Price: formData['Price'],
        Quantity: formData['Quantity'],
      })
      .toPromise()
      .then((Response) => {
        console.log(Response);
      });
  }

  //Update views
  UpdateViews(url, ProductData) {
    return this.http.patch<Products>(url, {
      Name: ProductData['Name'],
      Description: ProductData['Description'],
      Manufacturer: ProductData['Manufacturer'],
      Price: ProductData['Price'],
      Quantity: ProductData['Quantity'],
      views: ProductData['views'],
    });
  }

  //Delete products
  deleteProducts(Url) {
    console.log(Url);
    return this.http
      .delete(Url)
      .toPromise()
      .then((Response) => {
        console.log(Response + 'deleting');
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

  // Top Viewed Products;
  topViewedProducts() {
    return this.http
      .get<Products[]>('http://localhost:3000/comments')
      .subscribe((Respo) => {
        console.log(Respo);
        for (var i = 0; i < Respo.length; i++) {
          console.log('iubkj ' + Respo[i]['views']);
        }
      });
  }
}
