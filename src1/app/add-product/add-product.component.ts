import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from '../users';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  NewProducts =[
    {
      Name : '',
  Description:'',
  Manufacturer :'',
  Price : '',
  Quantity : ''

    }
  ] //: Products[] ;//= ['Dell',"Laptp","Dell",120,1];
  // this.NewProducts = ['Dell',"Laptp","Dell",120,1];

  Name:string;
  Desctiption:string;
  Manufacturer:string;
  Price:string;
  Quantity:string;

  ngOnInit(): void {
    this.NewProducts = [
      {
        'Name':'Dell',
        "Description":"Laptp",
        "Manufacturer":'dell',
        "Price":'12',
        "Quantity":'1'
      }
    ]};
  Colums = ['Name', "Description", "Manufacturer", "Price", "Quantity"];


  saveData(tableData:NgForm){
    console.log(tableData.form.value.Name);
      this.NewProducts.push(
        {
          Name:name,
          Description:'adf',
          Manufacturer:'asdf',
          Price:'af',
          Quantity:'as'
        });
    }
}
