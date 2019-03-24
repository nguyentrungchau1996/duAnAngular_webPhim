import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-chartfilm',
  templateUrl: './chartfilm.component.html',
  styleUrls: ['./chartfilm.component.scss']
})
export class ChartfilmComponent implements OnInit {
   // Doughnut
   public doughnutChartLabels: Label[] = ['Phim Việt', 'Phim Nước Ngoài', 'Khác'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100],
     [50, 150, 120],
     [250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
