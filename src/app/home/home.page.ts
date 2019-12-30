import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  percent:number = 0;
  radius:number = 100;

  fullTime:any = '00:01:30';

}
