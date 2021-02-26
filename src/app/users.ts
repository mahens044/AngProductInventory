import { MatCheckbox } from '@angular/material/checkbox';

export class Products{
  // CheckBox: MatCheckbox;
  Name : string;
  Description:string;
  Manufacturer :string;
  Price : string;
  Quantity : string ;
  completed: boolean;

  constructor(Name, Description, Manufacturer, Price, Quantity,completed){
    // this.CheckBox =check;
    this.Name = Name;
    this.Description = Description;
    this.Manufacturer = Manufacturer;
    this.Price = Price ;
    this.Quantity = Quantity;
    this.completed = false;
  }

}
