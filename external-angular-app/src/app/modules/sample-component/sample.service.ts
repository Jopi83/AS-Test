import {Inject, Injectable} from '@angular/core';
import {SERVER_URL} from './sample.config';

@Injectable()
export class SampleService {
  constructor(@Inject(SERVER_URL) private config: String) {
  }

  getApiUrl(): String {
    return this.config;
  }

}
