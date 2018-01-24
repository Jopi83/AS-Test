import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SampleModule } from './modules/sample-component/sample.module';
import { SERVER_URL } from './modules/sample-component/sample.config';
import { ROLES } from './modules/sample-component/sample.config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SERVER_URL,
      useValue: 'http://localhost:3000'
    },
    {
      provide: ROLES,
      useValue: ['ROLE_ADMIN', 'ROLE_USER']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
