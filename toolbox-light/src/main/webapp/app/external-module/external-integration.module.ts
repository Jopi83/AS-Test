import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolboxSharedModule } from '../shared';

import { ExternalIntegrationComponent } from './external-integration.component';
import { SampleComponent, SampleService, SERVER_URL } from 'external-app';

@NgModule({
    imports: [
        ToolboxSharedModule,
        RouterModule.forRoot(
            [
                {
                    path: 'external',
                    component: ExternalIntegrationComponent,
                    data: {
                        authorities: ['ROLE_USER'],
                        pageTitle: 'global.menu.external.main'
                    }
                }
            ],
            {useHash: true}
        )
    ],
    declarations: [
        ExternalIntegrationComponent,
        SampleComponent
    ],
    entryComponents: [
        ExternalIntegrationComponent
    ],
    providers: [
        {
            provide: SERVER_URL,
            useValue: 'override_api_url'
        },
        SampleService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolboxExternalIntegrationModule {
}
