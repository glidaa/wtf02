import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { MarketChart2Component } from './market-chart2/market-chart2.component';
import { CounterChartComponent } from './counter-chart/counter-chart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    MarketChartComponent,
    MarketChart2Component,
    CounterChartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}