import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';

import { JhiLanguageHelper} from '../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        'navbar.scss'
    ],
    animations: [
        trigger('toggle', [
            state('collapsed', style({ opacity: 0.0, height: 0 })),
            state('expanded', style({ opacity: 1.0, height: '*' })),
            transition('collapsed => expanded', [
                style({ opacity: 0.0, height: 0 }),
                animate('0.15s', style({ opacity: 1.0, height: '*' }))
            ]),
            transition('expanded => collapsed', [
                style({ opacity: 1.0, height: '*' }),
                animate('0.15s', style({ opacity: 0.0, height: 0 }))
            ])
        ])
    ]
})

export class NavbarComponent implements OnInit, AfterViewInit {

    inProduction: boolean;
    isNavbarCollapsed: boolean;
    isSidebarCollapsed: boolean;
    isSidebarFixed: boolean;
    isSidebarToggleAllowed: boolean;
    sidebarActiveItem: string;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;

    @ViewChild('sidebarMenu') myActiveElement: ElementRef;

    constructor(
        private languageService: JhiLanguageService,
        private languageHelper: JhiLanguageHelper,
        private router: Router,
        private eventManager: JhiEventManager,
        private cdRef: ChangeDetectorRef
    ) {
        this.isNavbarCollapsed = true;
        this.isSidebarCollapsed = true;
        this.isSidebarFixed = false;
        this.isSidebarToggleAllowed = true;
    }

    ngOnInit() {
        this.languageHelper.getAll().then((languages) => {
            this.languages = languages;
        });
    }

    ngAfterViewInit() {
        this.setActiveMenuItem();
        this.cdRef.detectChanges();
    }

    changeLanguage(languageKey: string) {
        this.languageService.changeLanguage(languageKey);
    }

    isAuthenticated() {
        return true;
    }

    login() {}

    logout() {
        this.router.navigate(['']);
    }

    setActiveMenuItem() {
        if (this.myActiveElement && this.myActiveElement.nativeElement.querySelector('a.active')) {
            this.sidebarActiveItem = this.myActiveElement.nativeElement.querySelector('a.active').getAttribute('data-menu-id');
        }
    }

    toggleSidebar() {
        if (!this.isSidebarToggleAllowed) {
            return;
        }
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
        this.isSidebarFixed = !this.isSidebarCollapsed;
        this.eventManager.broadcast({
            name: 'sidebarCollapse',
            content: 'Collapse Sidebar'
        });
    }

    toggleSidebarItem(sidebarItem: string) {
        if (this.sidebarActiveItem === sidebarItem) {
            this.sidebarActiveItem = '';
        } else {
            this.sidebarActiveItem = sidebarItem;
        }
    }

    openSidebar() {
        this.isSidebarToggleAllowed = false;
        Observable.timer(100).subscribe((t) => {
            this.isSidebarToggleAllowed = true;
        });
        this.isSidebarCollapsed = false;
        this.eventManager.broadcast({
            name: 'sidebarCollapseOut',
            content: 'Collapse Sidebar Out'
        });
    }

    closeSidebar() {
        this.isSidebarToggleAllowed = false;
        Observable.timer(100).subscribe((t) => {
            this.isSidebarToggleAllowed = true;
        });
        this.isSidebarCollapsed = true;
        this.eventManager.broadcast({
            name: 'sidebarCollapseIn',
            content: 'Collapse Sidebar In'
        });
    }

    sidebarMouseIn() {
        if (!this.isSidebarFixed && this.isSidebarCollapsed) {
            this.openSidebar();
        }
    }

    sidebarMouseOut() {
        if (!this.isSidebarFixed) {
            this.closeSidebar();
        }
    }

    getImageUrl() {}
}
