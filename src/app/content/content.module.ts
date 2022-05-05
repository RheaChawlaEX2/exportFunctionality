import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronCardComponent } from './chevron-card/chevron-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ExportContentComponent } from './export-content/export-content.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    ChevronCardComponent,
    ContactCardComponent,
    ExportContentComponent,
    ChartComponent,
   
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports:[
    
    ExportContentComponent,
    ChartComponent
  ]
})
export class ContentModule { }
