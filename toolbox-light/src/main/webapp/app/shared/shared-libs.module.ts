import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragulaModule } from 'ng2-dragula';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieModule } from 'ngx-cookie';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            i18nEnabled: true,
            defaultI18nLang: 'en'
        }),
        InfiniteScrollModule,
        DragulaModule,
        NgSelectModule,
        NgxDatatableModule,
        CookieModule.forRoot()
    ],
    providers: [
        NgSelectComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        NgbModule,
        NgSelectModule,
        NgJhipsterModule,
        InfiniteScrollModule,
        DragulaModule,
        NgxDatatableModule
    ]
})
export class ToolboxSharedLibsModule {}
