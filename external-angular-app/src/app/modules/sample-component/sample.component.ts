import {Component, OnInit} from '@angular/core';
import {SampleService} from './sample.service';

@Component({
  selector: 'app-external-integration',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  private apiUrl: String;

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.apiUrl = this.sampleService.getApiUrl();
  }

}
