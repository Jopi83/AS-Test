import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolboxSharedModule } from '../../shared';

import { SampleModule, SERVER_URL } from 'external-app'
import { ExternalIntegrationComponent } from './external-integration.component';

@NgModule({
    imports: [
        ToolboxSharedModule,
        SampleModule,
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
        ExternalIntegrationComponent
    ],
    entryComponents: [
        ExternalIntegrationComponent
    ],
    providers: [
        {
            provide: SERVER_URL,
            useValue: 'override_api_url'
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolboxExternalIntegrationModule {
}
