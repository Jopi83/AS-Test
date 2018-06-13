import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SERVER_URL } from './modules/appsegmenter-component/appsegmenter.config';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppsegmenterService } from './modules/appsegmenter-component/appsegmenter.service';
import { AppsegmenterComponent } from './modules/appsegmenter-component/appsegmenter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsegmenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SERVER_URL,
      useValue: 'https://adtechnology.axelspringer.com/node/tools/segmenter'
    },
    AppsegmenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
