import { Component, OnInit } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';

import { } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;

    constructor(
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
    }

    registerAuthenticationSuccess() {}

    isAuthenticated() {
        return true;
    }

    login() {}
}
