import { Component } from '@angular/core';
import { AdnxsObj }    from './modules/adnxsObjSelector/adnxsObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app';
  private publisher:AdnxsObj;

  get diagnostic() { return JSON.stringify(this.publisher); }

}
