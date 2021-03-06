import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ToolboxSharedModule } from './shared';
import { ToolboxAppRoutingModule} from './app-routing.module';
import { ToolboxHomeModule } from './home/home.module';

import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import { ToolboxExternalIntegrationModule } from './external-module';

@NgModule({
    imports: [
        BrowserModule,
        ToolboxAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ToolboxSharedModule,
        ToolboxHomeModule,
        BrowserModule,
        BrowserAnimationsModule,
        ToolboxExternalIntegrationModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        PaginationConfig
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ToolboxAppModule {
    // tslint:disable-next-line: no-unused-variable
    constructor(private paginationConfig: PaginationConfig) {
    }
}
