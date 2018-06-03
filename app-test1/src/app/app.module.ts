import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SERVER_URL } from './modules/sample-component/sample.config';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SampleService } from './modules/sample-component/sample.service';
import { SampleComponent } from './modules/sample-component/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SERVER_URL,
      useValue: 'http://localhost:3000'
    },
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
