import { Inject, Injectable } from '@angular/core';
import { ROLES, SERVER_URL } from './sample.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class SampleService {
  constructor(@Inject(SERVER_URL) private config: String,
              @Inject(ROLES) private roles: String[],
              private oauthService: OAuthService,
              private http: HttpClient) {
  }


  getApiUrl(): String {
    return this.config;
  }

  fetchDataFromBackend(): Observable<any> {
    return this.http.get(this.config + '/list');
  }

  getRoles(): String[] {
    return this.roles;
  }
}
