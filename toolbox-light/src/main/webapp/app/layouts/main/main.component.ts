import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { JhiLanguageHelper } from '../../shared';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    styleUrls: [
        'main.scss'
    ]
})
export class JhiMainComponent implements OnInit {

    sidebarIsCollapsed: boolean;
    sidebarIsFixed: boolean;

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router,
        private eventManager: JhiEventManager
    ) {
        this.sidebarIsCollapsed = true;
        this.sidebarIsFixed = false;
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'toolboxApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });

        this.eventManager.subscribe('sidebarCollapse', (response) => this.sidebarCollapse());
        this.eventManager.subscribe('sidebarCollapseIn', (response) => this.sidebarCollapseIn());
        this.eventManager.subscribe('sidebarCollapseOut', (response) => this.sidebarCollapseOut());
    }

    sidebarCollapse() {
        this.sidebarIsCollapsed = !this.sidebarIsCollapsed;
        this.sidebarIsFixed = !this.sidebarIsCollapsed;
    }

    sidebarCollapseOut() {
        this.sidebarIsCollapsed = false;
    }

    sidebarCollapseIn() {
        this.sidebarIsCollapsed = true;
    }

    isAuthenticated() {
        return true;
    }
}
