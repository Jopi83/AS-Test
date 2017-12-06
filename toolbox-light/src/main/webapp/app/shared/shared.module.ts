import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { navbarRoute } from '../layouts';

import {
    ToolboxSharedLibsModule,
    ToolboxSharedCommonModule
} from './';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        ToolboxSharedLibsModule,
        ToolboxSharedCommonModule,
        RouterModule.forRoot([navbarRoute], { useHash: true })
    ],
    declarations: [
    ],
    providers: [
        DatePipe
    ],
    exports: [
        ToolboxSharedCommonModule,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ToolboxSharedModule {}
