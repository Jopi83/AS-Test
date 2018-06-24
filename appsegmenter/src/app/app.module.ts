import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SERVER_URL } from './modules/segmenter.config';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppsegmenterService } from './modules/appsegmenter-component/appsegmenter.service';
import { AppsegmenterComponent } from './modules/appsegmenter-component/appsegmenter.component';
import { SegUploadStatusService } from './modules/SegUploadStatus/SegUploadStatus.service';
import { SegUploadStatusComponent } from './modules/SegUploadStatus/SegUploadStatus.component';


@NgModule({
  declarations: [
    AppComponent,
    AppsegmenterComponent,
    SegUploadStatusComponent
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
    AppsegmenterService,
    SegUploadStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
