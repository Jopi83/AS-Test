import { Component, OnInit } from '@angular/core';
import { AppsegmenterService } from './appsegmenter.service';

@Component({
  selector: 'app-appsegmenter',
  templateUrl: './appsegmenter.component.html',
  styleUrls: ['./appsegmenter.component.css']
})
export class AppsegmenterComponent implements OnInit {

  private apiUrl: String;
  private data: String;

  constructor(private sampleService: AppsegmenterService) {
  }

  ngOnInit() {
      this.apiUrl = this.sampleService.getApiUrl();
      this.sampleService.fetchDataFromBackend().subscribe(
        (response) => {
          this.data = response.status;
        }
      );
  }

}
