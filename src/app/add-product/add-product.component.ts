import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public firstname: string;
  public prod: any;
  Name;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.prod = this.router.getCurrentNavigation().extras.state;

    });
  }

  ngOnInit(): void {}
  ngDoCheck() {
        console.log("In Add")
    // this.router.navigate(['about']);
  }
  Add(formData: NgForm) {
    this.authService.saveAddProduct(formData.value).subscribe((Response) => {
      console.log('Form Data:', Response);
      this.router.navigate(['app-feature']);
    });
  }
  canExit() : boolean {

    if (confirm("Do you wish to Please confirm")) {
      console.log("you ");
        return true
      } else {
        return false
      }
    }

}
