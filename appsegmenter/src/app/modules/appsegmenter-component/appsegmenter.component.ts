import { Component, OnInit } from '@angular/core';
import { AppsegmenterService } from './appsegmenter.service';
import { Segmentprofil }    from './segmentprofil';

@Component({
  selector: 'app-appsegmenter',
  templateUrl: './appsegmenter.component.html',
  styleUrls: ['./appsegmenter.component.css']
})
export class AppsegmenterComponent implements OnInit {

  private apiUrl: String;
  private data: String;
  private idtypes = ['idfa', 'aaid'];
  private times = [['delete', -1], ['1 Tag', 1440]];
  private model = new Segmentprofil("000","idfa",[{'id': 123, 'time': 1440}]);
  submitted = false;

  constructor(private sampleService: AppsegmenterService) {
    // this.idtype = ['idfa', 'aaid', 'sha1udid', 'md5udid', 'sha1mac', 'openudid', 'windowsadid'];
  }
  
  onSubmit() { 
    this.submitted = true; 
    console.log('submit jedrückt');
  }
  // onSubmit() { console.log('submit jedrückt');}
  
  get diagnostic() { return JSON.stringify(this.model); }
  
  ngOnInit() {
      /* this.apiUrl = this.sampleService.getApiUrl();
      this.sampleService.fetchDataFromBackend().subscribe(
        (response) => {
          this.data = response.status;
        }
      );*/
  }

}
