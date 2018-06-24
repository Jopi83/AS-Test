import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SegUploadStatusService } from './SegUploadStatus.service';

@Component({
  selector: 'app-segmenter-SegUploadStatus',
  templateUrl: './SegUploadStatus.component.html',
  styleUrls: ['./SegUploadStatus.component.css']
})
export class SegUploadStatusComponent implements OnInit {

  private apiUrl: String;
  private data: String;
  private model = {};//new Segmentprofil("","idfa",[new Segment(123, 1440), new Segment(124, 1440)]);
  //submitted = false;

  constructor(private http: HttpClient, private segUpStatService: SegUploadStatusService) {
    // this.idtype = ['idfa', 'aaid', 'sha1udid', 'md5udid', 'sha1mac', 'openudid', 'windowsadid'];
  }
  /*
  onSubmit() { 
    this.submitted = true; 
    console.log('submit jedrückt');
    console.log(this.sampleService.getApiUrl());
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
    this.http.get(this.sampleService.getApiUrl()+'')
    .subscribe(data => {
      //console.log("authenticated: " + data["authenticated"]);
      console.log(JSON.stringify(data));
      });
     
     this.http.post(this.sampleService.getApiUrl() + '', this.model, {headers: header})
       .subscribe(data => {
      //console.log("authenticated: " + data["authenticated"]);
      console.log(JSON.stringify(data));
      });
  }
  addSegment(){
    this.model.segmente.push(new Segment(123,1440));
    console.log('addSegment jedrückt');
  }
  deleteSegment(segment:Segment){
    //this.model.segmente.remove(segment);
    console.log('deleteSegment jedrückt');
    this.model.segmente.splice(this.model.segmente.indexOf(segment), 1); 
    console.log(this.model.segmente.indexOf(segment));
  }
  // onSubmit() { console.log('submit jedrückt');}
  */
  get diagnostic() { return this.data; }
  
  ngOnInit() {
      this.apiUrl = this.segUpStatService.getApiUrl();
      this.sampleService.getSegUpStat().subscribe(
        (response) => {
          this.data = response.body;
        }
      );
  }

}
