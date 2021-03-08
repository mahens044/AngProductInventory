// import { MatCheckbox } from '@angular/material/checkbox';

export class Products{
  // CheckBox: MatCheckbox;
  Name : string;
  Description:string;
  Manufacturer :string;
  Price : string;
  Quantity : string ;
  completed: boolean;
  // id:string;
  views:number;

  constructor(Name, Description, Manufacturer, Price, Quantity,id,completed){
    // this.CheckBox =check;
    this.Name = Name;
    this.Description = Description;
    this.Manufacturer = Manufacturer;
    this.Price = Price ;
    this.Quantity = Quantity;
    this.completed = false;
    // this.id=id;
    this.views = 0;
  }

}
