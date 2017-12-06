import { JhiEventManager, JhiInterceptableHttp } from 'ng-jhipster';
import { Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';

export function interceptableFactory(
    backend: XHRBackend,
    defaultOptions: RequestOptions
) {
    return new JhiInterceptableHttp(
        backend,
        defaultOptions,
        []
    );
}

export function customHttpProvider() {
    return {
        provide: Http,
        useFactory: interceptableFactory,
        deps: [
            XHRBackend,
            RequestOptions,
            Injector,
            JhiEventManager
        ]
    };
}
