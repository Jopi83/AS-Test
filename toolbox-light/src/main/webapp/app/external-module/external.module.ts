import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToolboxExternalIntegrationModule } from './integration/external-integration.module';

@NgModule({
    imports: [ToolboxExternalIntegrationModule],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolboxExternalModule {}
