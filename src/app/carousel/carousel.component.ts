import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent,Orientation } from '@ngmodule/material-carousel';
import { Observable, Subject, interval } from 'rxjs';
import { trigger, transition, animate, style , state } from '@angular/animations'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [trigger("move", [
    transition(':enter', [
      animate(1500, style({ transform: 'translateX(-100%)' }))
    ]),
    transition(':leave', [
      animate(1500, style({ transform: 'translateX(-100%)' }))
    ])
  ])]
  })
export class CarouselComponent implements OnInit {
  counter = 0;
  slideItems = [
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fabcnews.com%2F&width=480', title: 'ABCNEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ftheatlantic.com%2F&width=480', title: 'ATLANTIC' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fasiatimes.com%2F&width=480', title: 'ASIA TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Faxios.com%2F&width=480', title: 'AXIOS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnews.bbc.co.uk%2F&width=480', title: 'BBC' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbild.com%2F&width=480', title: 'BILD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbillboard.com%2F&width=480', title: 'BILLBOARD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fboston.com%2F&width=480', title: 'BOSTON GLOBE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbostonherald.com%2F&width=480', title: 'BOSTON HERALD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbreitbart.com%2F&width=480', title: 'BREITBART' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbusinessinsider.com%2F&width=480', title: 'BUSINESS INSIDER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fbuzzfeed.com%2F&width=480', title: 'BUZZFEED' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fcbsnews.com%2F&width=480', title: 'CBS NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fcbslocal.com%2F&width=480', title: 'CBS NEWS LOCAL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fc-span.org%2F&width=480', title: 'C-SPAN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fsuntimes.com%2F&width=480', title: 'CHICAGO SUN-TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fchicagotribune.com%2F&width=480', title: 'CHICAGO TRIB' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fcsmonitor.com%2F&width=480', title: 'CHRISTIAN SCIENCE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fcnbc.com%2F&width=480', title: 'CNBC' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fcnn.com%2F&width=480', title: 'CNN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthedailybeast.com%2F&width=480', title: 'DAILY BEAST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailycaller.com%2F&width=480', title: 'DAILY CALLER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailywire.com%2F&width=480', title: 'DAILY WIRE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdeadline.com%2F&width=480', title: 'DEADLINE HOLLYWOOD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fspiegel.de%2F&width=480', title: 'DER SPIEGEL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Feonline.com%2F&width=480', title: 'E!' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Feconomist.com%2F&width=480', title: 'ECONOMIST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Few.com%2F&width=480', title: 'ENT WEEKLY' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fft.com%2F&width=480', title: 'FINANCIAL TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fforbes.com%2F&width=480', title: 'FORBES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ffoxnews.com%2F&width=480', title: 'FOXNEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ffrance24.com%2F&width=480', title: 'FRANCE 24' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ffreebeacon.com%2F&width=480', title: 'FREE BEACON' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ffreerepublic.com%2F&width=480', title: 'FREE REPUBLIC' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthegatewaypundit.com%2F&width=480', title: 'GATEWAY PUNDIT' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fhotair.com%2F&width=480', title: 'HOT AIR' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fhellomagazine.com%2F&width=480', title: 'HELLO!' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthehill.com%2F&width=480', title: 'HILL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthehill.com%2F&width=480', title: 'HILL: JUST IN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fhollywoodreporter.com%2F&width=480', title: 'HOLLYWOOD REPORTER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fhuffingtonpost.com%2F&width=480', title: 'HUFFINGTON POST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Finfowars.com%2F&width=480', title: 'INFOWARS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ffirstlook.org%2F&width=480', title: 'INTERCEPT' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fjpost.com%2F&width=480', title: 'JERUSALEM POST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailynewslosangeles.com%2F&width=480', title: 'LA DAILY NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Flatimes.com%2F&width=480', title: 'LA TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Flucianne.com%2F&width=480', title: 'LUCIANNE.COM' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fmarketwatch.com%2F&width=480', title: 'MARKETWATCH' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fmediaite.com%2F&width=480', title: 'MEDIAITE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fmotherjones.com%2F&width=480', title: 'MOTHER JONES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthenation.com%2F&width=480', title: 'NATION' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnationalreview.com%2F&width=480', title: 'NATIONAL REVIEW' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnbcnews.com%2F&width=480', title: 'NBC NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthenewrepublic.com%2F&width=480', title: 'NEW REPUBLIC' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnymag.com%2F&width=480', title: 'NEW YORK' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnydailynews.com%2F&width=480', title: 'NY DAILY NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fobserver.com%2F&width=480', title: 'NY OBSERVER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnypost.com%2F&width=480', title: 'NY POST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnytimes.com%2F&width=480', title: 'NY TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnytimes.com%2F&width=480', title: 'NY TIMES WIRE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnewyorker.com%2F&width=480', title: 'NEW YORKER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnewsbusters.org%2F&width=480', title: 'NEWSBUSTERS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnewsmax.com%2F&width=480', title: 'NEWSMAX' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fpeople.com%2F&width=480', title: 'PEOPLE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fpjmedia.com%2F&width=480', title: 'PJ MEDIA' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fpolitico.com%2F&width=480', title: 'POLITICO' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Frealclearpolitics.com%2F&width=480', title: 'REAL CLEAR POLITICS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Freason.org%2F&width=480', title: 'REASON' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Frollcall.com%2F&width=480', title: 'ROLL CALL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Frollingstone.com%2F&width=480', title: 'ROLLING STONE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fsalon.com%2F&width=480', title: 'SALON' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fsfgate.com%2F&width=480', title: 'SAN FRAN CHRON' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fnews.sky.com%2F&width=480', title: 'SKY NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fslate.com%2F&width=480', title: 'SLATE' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthesmokinggun.com%2F&width=480', title: 'SMOKING GUN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthe-sun.com%2F&width=480', title: 'SUN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ftime.com%2F&width=480', title: 'TIME MAG' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ftmz.com%2F&width=480', title: 'TMZ' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailymail.co.uk%2F&width=480', title: '[UK] DAILY MAIL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailymail.co.uk%2F&width=480', title: '[UK] DAILY MAIL FEED' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fmirror.co.uk%2F&width=480', title: '[UK] DAILY MIRROR' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fdailyrecord.co.uk%2F&width=480', title: '[UK] DAILY RECORD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthisislondon.co.uk%2F&width=480', title: '[UK] EVENING STANDARD' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fexpress.co.uk%2F&width=480', title: '[UK] EXPRESS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fguardian.co.uk%2F&width=480', title: '[UK] GUARDIAN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Findependent.co.uk%2F&width=480', title: '[UK] INDEPENDENT' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fthesun.co.uk%2F&width=480', title: '[UK] SUN' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Ftelegraph.co.uk%2F&width=480', title: '[UK] TELEGRAPH' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fusnews.com%2F&width=480', title: 'US NEWS' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fusatoday.com%2F&width=480', title: 'USA TODAY' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fvanityfair.com%2F&width=480', title: 'VANITY FAIR' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fvariety.com%2F&width=480', title: 'VARIETY' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fonline.wsj.com%2F&width=480', title: 'WALL STREET JOURNAL' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fwashingtonexaminer.com%2F&width=480', title: 'WASH EXAMINER' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fwashingtonpost.com%2F&width=480', title: 'WASH POST' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fwashingtontimes.com%2F&width=480', title: 'WASH TIMES' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fwnd.com%2F&width=480', title: 'WORLD NET DAILY' },
    { src: 'https://api.thumbnail.ws/api/ab7a0a1407eb7f2455a2dbdf5bdb5af60e54d00a8273/thumbnail/get?url=https%3A%2F%2Fzerohedge.com%2F&width=480', title: 'ZERO HEDGE' }
    
  ];
    
  
    
  showNextImage() {
    if (this.counter < this.slideItems.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
    constructor() {
      setInterval(() =>{
        if (this.counter < this.slideItems.length -1) {
          this.counter += 1;
        } else {
          this.counter = 0;
        }
         }, 15000);

     }

  ngOnInit(): void {
    
    
}
}
