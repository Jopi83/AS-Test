import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SERVER_URL } from './modules/adnxsObjSelector.config';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdnxsObjSelectorService } from './modules/adnxsObjSelector/adnxsObjSelector.service';
import { AdnxsObjSelectorComponent } from './modules/adnxsObjSelector/adnxsObjSelector.component';
import { TestCountrySelector } from './modules/TestCountrySelector/TestCountrySelector.component';



@NgModule({
  declarations: [
    AppComponent,
    AdnxsObjSelectorComponent,
    TestCountrySelector
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SERVER_URL,
      useValue: 'https://adtechnology.axelspringer.com'
    },
    AdnxsObjSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
