import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdnxsObjSelectorService } from './adnxsObjSelector.service';

@Component({
  selector: 'app-adnxsObjSelector',
  templateUrl: './adnxsObjSelector.component.html',
  styleUrls: ['./adnxsObjSelector.component.css']
})
export class AdnxsObjSelectorComponent implements OnInit {

  private apiUrl: String;
  private data = "initTest";
  private model = {};//new Segmentprofil("","idfa",[new Segment(123, 1440), new Segment(124, 1440)]);
  //submitted = false;
  @Input() type: string;

  constructor(private http: HttpClient, private adnxsObjSelectorService: AdnxsObjSelectorService) {
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
  get diagnostic() { return JSON.stringify(this.data); }
  
  ngOnInit() {
      this.apiUrl = this.adnxsObjSelectorService.getApiUrl();
      this.adnxsObjSelectorService.getData(this.type).subscribe(
        (response) => {
          this.data = response;
        }
      );
  }

}
