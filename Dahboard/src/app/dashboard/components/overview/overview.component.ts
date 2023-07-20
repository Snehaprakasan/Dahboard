import { Attribute, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {  name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { name: 'Helium', weight: 4.0026, symbol: 'He' },
  {  name: 'Lithium', weight: 6.941, symbol: 'Li' },
  {  name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { name: 'Boron', weight: 10.811, symbol: 'B' },
  {  name: 'Carbon', weight: 12.0107, symbol: 'C' },
  {  name: 'Nitrogen', weight: 14.0067, symbol: 'N' },

];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  

  constructor() {
  }

  ngOnInit(): void {
  
  }
  canvas: any;
  smallCanvas:any;
  ctx: any;
  xts:any;
  @ViewChild('mychart') mychart: any;
  @ViewChild('smallChart') smallChart: any;


  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      this.smallCanvas = this.smallChart.nativeElement;
      this.xts = this.smallCanvas.getContext('2d');

      // const labels = Utils.months({count: 7});
      const labels = ["January", "February", "March", "April", "May", "June", "July"]

      new Chart(this.ctx, {
          type: 'line',
          
          data : {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              backgroundColor:'rgb(233, 243, 251)',
              borderColor: 'rgb(181, 202, 229)',
            }]
          }
      });
      new Chart(this.xts, {
        type: 'line',
        
        data : {
          datasets: [{
            label: 'sample Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor:'rgb(233, 243, 251)',
            borderColor: 'rgb(181, 202, 229)',
          }]
        }
    });
  }
}
