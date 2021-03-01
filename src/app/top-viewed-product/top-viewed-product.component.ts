import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { AuthServiceService } from '../auth-service.service';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-top-viewed-product',
  templateUrl: './top-viewed-product.component.html',
  styleUrls: ['./top-viewed-product.component.css'],
})
export class TopViewedProductComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  constructor(private authService: AuthServiceService, private _snackbar:MatSnackBar) {}
  tempResponse: any = { };
  tempObj : any ={};
  NameArr: any = [];
  ViewArr: any = [];
   NameArr1 : any=[]
   ViewArr1: any = []

  ngOnInit(): void {
    this.authService
      .getProductSummaryService('http://localhost:3000/comments')
      .subscribe((Response) => {
        console.log('Top ', Response[0]['Name']);
        this.tempResponse = Response;

        for (var i = 0; i < Response.length; i++) {

          this.NameArr[i] = Response[i].Name;
          this.ViewArr[i] = Response[i].views;
        }

        this.tempObj = this.combineArrays(this.NameArr,this.ViewArr);
        console.log(this.tempObj);
        console.log(this.tempObj.sort(function(a, b) {
          return b.view - a.view;
        }));

        console.log("Converted ",this.tempObj);
      });
  }
  name:any
   combineArrays = (first, second) => {

     return  first.map(function (x, i) {
      return {name : x,
        view : second[i]}
  });

 };

 public pieChartLabels: Label[] = this.NameArr;

  public pieChartData: number[] = this.ViewArr;

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(205,1,0,0.7)',
        'rgba(0,255,0,0.5)',
        'rgba(0,0,255,0.6)',
      ],
    },
  ];
  topProd:number;
  changeLabels(topProd:number): void {
    // topProd = this.tempResponse.length;
    console.log("Value " ,topProd);
    console.log("In button",this.tempResponse);
    for (var i = 0; i < topProd; i++) {
      if(this.tempObj[i]['view'] == 0){
        this._snackbar.open('Only '+ i +' Products have views', '', {
          duration: 2000,
        });
         break;
      }
      this.NameArr1[i] = this.tempObj[i]['name'];
      this.ViewArr1[i] = this.tempObj[i]['view'];
    }

    this.pieChartLabels = this.NameArr1;

    this.pieChartData = this.ViewArr1;
    console.log(this.NameArr1)

  }
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

}
