import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdnxsObjSelectorService } from './adnxsObjSelector.service';
import { AdnxsObj }    from './adnxsObj';

@Component({
  selector: 'app-adnxsObjSelector',
  templateUrl: './adnxsObjSelector.component.html',
  styleUrls: ['./adnxsObjSelector.component.css']
})
export class AdnxsObjSelectorComponent implements OnInit {

  private apiUrl: String;
  private data:Array<AdnxsObj>;//"initTest";
  private options:Array<AdnxsObj>;
  private selectedObj:{};
  private model = {};//new Segmentprofil("","idfa",[new Segment(123, 1440), new Segment(124, 1440)]);
  //submitted = false;
  @Input() type: string;
  @Input() id:string;

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
  get diagnostic() { return JSON.stringify(this.selectedObj)+JSON.stringify(this.data); }

  ngOnInit() {
       console.log("NGinit type :"+this.type+": ");
      this.apiUrl = this.adnxsObjSelectorService.getApiUrl();
      //let response = {"publisher":{"num_elements":64,"results":[{"member_id":7823,"code":null,"name":"Default Real Time","id":994151,"state":"active","last_modified":"2017-11-30 20:34:10"},{"member_id":7823,"code":"9monate.de","name":"9monate.de","id":1000492,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"autobild.de","name":"autobild.de","id":1000493,"state":"active","last_modified":"2018-01-29 18:36:04"},{"member_id":7823,"code":"bild.de","name":"bild.de","id":1000494,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"bildderfrau.de","name":"bildderfrau.de","id":1000495,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"bildspielt.de","name":"bildspielt.de","id":1000496,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"businessinsider.de","name":"businessinsider.de","id":1000497,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"bz-berlin.de","name":"bz-berlin.de","id":1000498,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"computerbild.de","name":"computerbild.de","id":1000499,"state":"active","last_modified":"2018-01-29 18:36:04"},{"member_id":7823,"code":"finanzen.net","name":"finanzen.net","id":1000500,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"herzberatung.de","name":"herzberatung.de","id":1000502,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"hoerzu.de","name":"hoerzu.de","id":1000503,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"idealo.de","name":"idealo.de","id":1000504,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"kaufda.de","name":"kaufda.de","id":1000506,"state":"active","last_modified":"2018-01-24 20:28:50"},{"member_id":7823,"code":"lifeline.de","name":"lifeline.de","id":1000507,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"mediapilot.de","name":"mediapilot.de","id":1000508,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"meinestadt.de","name":"meinestadt.de","id":1000509,"state":"active","last_modified":"2018-01-14 19:10:38"},{"member_id":7823,"code":"metal-hammer.de","name":"metal-hammer.de","id":1000510,"state":"active","last_modified":"2017-12-21 19:09:35"},{"member_id":7823,"code":"musikexpress.de","name":"musikexpress.de","id":1000511,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"nationalgeographic.de","name":"nationalgeographic.de","id":1000512,"state":"active","last_modified":"2018-02-05 20:14:41"},{"member_id":7823,"code":"noizz.de","name":"noizz.de","id":1000514,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"onet.pl","name":"onet.pl","id":1000515,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"qualimedic.de","name":"qualimedic.de","id":1000516,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"rollingstone.de","name":"rollingstone.de","id":1000517,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"rund-ums-baby.de","name":"rund-ums-baby.de","id":1000518,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"sky.de","name":"sky.de","id":1000519,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"special-harninkontinenz.de","name":"special-harninkontinenz.de","id":1000520,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"sportbild.de","name":"sportbild.de","id":1000521,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"stylebook.de","name":"stylebook.de","id":1000523,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"techbook.de","name":"techbook.de","id":1000524,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"transfermarkt.de","name":"transfermarkt.de","id":1000526,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"travelbook.de","name":"travelbook.de","id":1000527,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"tvdigital.de","name":"tvdigital.de","id":1000528,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"TVdirekt-Online-Group","name":"TVdirekt-Online-Group","id":1000529,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"wieistmeineip.de","name":"wieistmeineip.de","id":1000530,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"yavivo.de","name":"yavivo.de","id":1000531,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"comedycentral.de","name":"comedycentral.de","id":1000532,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"welt.de","name":"welt.de","id":1000533,"state":"active","last_modified":"2018-01-29 18:36:05"},{"member_id":7823,"code":"bildderfrau.de_schlank-fit","name":"bildderfrau.de_schlank-fit","id":1000534,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"bundesliga_bild.de","name":"bundesliga","id":1000535,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"buzz_bild.de","name":"buzz_bild.de","id":1000536,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"nick.de","name":"nick.de","id":1000537,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"upday_Germany","name":"upday_Germany","id":1000538,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"watchmi","name":"watchmi","id":1000541,"state":"active","last_modified":"2018-01-29 18:36:05"},{"member_id":7823,"code":"districtMTV.de","name":"districtMTV.de","id":1000543,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"mtv.de","name":"mtv.de","id":1000544,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"nicknight.de","name":"nicknight.de","id":1000545,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"southpark.de","name":"southpark.de","id":1000547,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"viva.tv","name":"viva.tv","id":1000548,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":"bildderfrau.de_horoskope","name":"bildderfrau.de_horoskope","id":1000549,"state":"active","last_modified":"2017-11-30 20:34:17"},{"member_id":7823,"code":null,"name":"Fallback-Publisher","id":1021125,"state":"active","last_modified":"2017-11-30 20:34:27"},{"member_id":7823,"code":"Sporttotal.tv","name":"Sporttotal.tv","id":1021131,"state":"active","last_modified":"2017-11-30 20:34:27"},{"member_id":7823,"code":null,"name":"test_adtechnology","id":1032867,"state":"active","last_modified":"2017-11-30 20:34:37"},{"member_id":7823,"code":null,"name":"adtechnology.axelspringer.de","id":1036466,"state":"active","last_modified":"2017-11-30 20:34:40"},{"member_id":7823,"code":"watchmi_tvplus","name":"watchmi_tvplus","id":1067498,"state":"active","last_modified":"2018-01-29 18:36:05"},{"member_id":7823,"code":"skygo.de","name":"skygo.de","id":1067500,"state":"active","last_modified":"2017-11-30 20:35:10"},{"member_id":7823,"code":"specialrueckenschmerz.de","name":"specialrueckenschmerz.de","id":1079385,"state":"active","last_modified":"2017-11-30 20:35:18"},{"member_id":7823,"code":"fitbook.de","name":"fitbook.de","id":1080426,"state":"active","last_modified":"2017-12-12 09:54:59"},{"member_id":7823,"code":"Visoon","name":"Visoon","id":1103846,"state":"active","last_modified":"2017-11-30 20:35:39"},{"member_id":7823,"code":null,"name":"upday_test","id":1118230,"state":"active","last_modified":"2018-01-23 19:12:17"},{"member_id":7823,"code":"sport1.de","name":"sport1.de","id":1120688,"state":"active","last_modified":"2018-04-18 08:24:43"},{"member_id":7823,"code":"goldenekamera.de","name":"goldenekamera.de","id":1141317,"state":"active","last_modified":"2018-05-30 08:57:44"},{"member_id":7823,"code":null,"name":"herzstueck-mag.de","id":1146596,"state":"active","last_modified":"2018-01-12 19:12:12"},{"member_id":7823,"code":"werstreamt.es","name":"werstreamt.es","id":1164665,"state":"active","last_modified":"2018-05-30 08:56:43"}]}}
      //this.data = response.publisher.results;

      this.adnxsObjSelectorService.getData(this.type).subscribe(
        (response) => {
          this.data = response.results;
          console.log(JSON.stringify(this.data));
        }
      );
  }

}
