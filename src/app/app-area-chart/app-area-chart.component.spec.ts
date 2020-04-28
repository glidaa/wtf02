import { Component, LOCALE_ID  } from '@angular/core';
// import {Observable} from 'rxjs/Observable';

import * as moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  date:Date;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;

  isTwelveHrFormat:false;
  test:any;
  constructor(){
   //   let now = moment(); // add this 2 of 4
     //navigator.language || navigator.userLanguage; 

 //var test = moment('2016-01-24 14:23:45');

       //ja-JP;
 //de-DE
    setInterval(() =>{
   const currentDate = new Date();
   this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }
}




    // IntervalObservable.create(1000).map(tick => new Date()).share()   
    // .subscribe( res =>{
     
    //   this.date = res;
    //    this.hours =  this.date.getHours();
    //    this.minutes = this.date.getMinutes();
    //    this.seconds = this.date.getSeconds();
    // }) 
