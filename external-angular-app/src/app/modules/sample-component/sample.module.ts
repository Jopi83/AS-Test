import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    CommonModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:3000'],
        sendAccessToken: true
      }
    })
  ],
  declarations: [
    SampleComponent
  ],
  providers: [
    SampleService
  ],
  exports: [
    SampleComponent
  ]
})
export class SampleModule {
}
