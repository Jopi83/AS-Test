import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderModule} from './modules/sample-component/sample.module';
import {SERVER_URL} from './modules/sample-component/sample.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [
    {
      provide: SERVER_URL,
      useValue: 'internal_api_url'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
