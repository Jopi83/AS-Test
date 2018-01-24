import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { JwksValidationHandler, OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-external-integration',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  private apiUrl: String;
  private data: String;
  private roles: String[];

  constructor(private sampleService: SampleService, private oauthService: OAuthService, private http: HttpClient) {
  }

  ngOnInit() {
    // Für den Client registrierte Id
    this.oauthService.clientId = 'nodejsserver';

    // Url des Angular-Clients, an die das Token zu senden ist
    this.oauthService.redirectUri = window.location.origin;

    // Rechte, die der Client wahrnehmen möchte
    this.oauthService.scope = 'openid profile email';

    // Definieren, dass auch ein Id-Token abgerufen werden soll
    this.oauthService.oidc = true;

    // Festlegen, ob Tokens im localStorage oder im sessionStorage zu speichern sind
    this.oauthService.setStorage(sessionStorage);

    this.oauthService.issuer = 'http://localhost:9080/auth/realms/jhipster';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      this.apiUrl = this.sampleService.getApiUrl();
      this.roles = this.sampleService.getRoles();
      this.sampleService.fetchDataFromBackend().subscribe(
        (response) => {
          this.data = response.status;
        }
      );
    });
  }

}
