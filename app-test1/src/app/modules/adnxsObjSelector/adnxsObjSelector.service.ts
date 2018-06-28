import { Inject, Injectable } from '@angular/core';
import { SERVER_URL } from './../adnxsObjSelector.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdnxsObjSelectorService {
  constructor(@Inject(SERVER_URL) private config: String,
              private http: HttpClient) {
  }

  getApiUrl(): String {
    return this.config;
  }
  getData(type:String): Observable<any> {
  return this.http.get(this.config+'/node/services/lookup?type='+type);
  }
}
