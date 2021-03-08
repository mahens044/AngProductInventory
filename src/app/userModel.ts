

export class Users{
  // CheckBox: MatCheckbox;
  Email:string;
  FirstName:string;
  LastName :string;
  Location : string;
  Mobile : string ;
  UserId: number;
  constructor(email, fname, lname, location, mobile,userId){
    // this.CheckBox =check;
    this.Email = email;
    this.FirstName= fname;
    this.LastName = lname;
    this.Location = location ;
    this.Mobile = mobile;
    this.UserId = userId;

  }

}
