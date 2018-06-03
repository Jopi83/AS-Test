import { Inject, Injectable } from '@angular/core';
import { SERVER_URL } from './appsegmenter.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppsegmenterService {
  constructor(@Inject(SERVER_URL) private config: String,
              private http: HttpClient) {
  }

  getApiUrl(): String {
    return this.config;
  }

  fetchDataFromBackend(): Observable<any> {
    return this.http.get(this.config + '/list');
  }
}
