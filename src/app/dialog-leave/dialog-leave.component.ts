import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-leave',
  templateUrl: './dialog-leave.component.html',
  styleUrls: ['./dialog-leave.component.css']
})
export class DialogLeaveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Leave(){
    console.log("Inside leave");
    // this.mat-d
    console.log(this.router);
    this.router.navigate(['about']);
    // this.router.navigate(['about']);
    console.log(this.router.navigate(['about']));
return true;
    // this.router.navigate(['app-feature']);
  }
}
