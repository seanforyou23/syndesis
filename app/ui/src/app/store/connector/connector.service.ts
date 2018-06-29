import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { ApiHttpService, Connector, Connectors } from '@syndesis/ui/platform';
import { RESTService } from '../entity';

interface AcquisitionResponseState {
  persist: string;
  spec: string;
}

interface AcquisitionResponse {
  redirectUrl: string;
  type: string;
  state: AcquisitionResponseState;
}

@Injectable()
export class ConnectorService extends RESTService<Connector, Connectors> {
  constructor(apiHttpService: ApiHttpService) {
    super(apiHttpService, 'connectors', 'connector');
  }

  validate(id: string, data: Map<string, string>) {
    return this.apiHttpService
      .setEndpointUrl(`/connectors/${id}/verifier`)
      .post(data);
  }

  credentials(id: string) {
    return this.apiHttpService
      .setEndpointUrl(`/connectors/${id}/credentials`)
      .get();
  }

  acquireCredentials(id: string) {
    // need to save the state of the app a bit since this
    // will navigate to a new page and then come back
    return Observable.create(observer => {
      // TODO we probably don't need all these nested setTimeouts, but...
      setTimeout(() => {
        // Try and clear any stale cookies, though we can't touch HttpOnly ones
        document.cookie.split(';').forEach(function(c) {
          if (c.startsWith('cred-')) {
            const newCookie = c
              .replace(/^ +/, '')
              .replace(
                /=.*/,
                '=;expires=' + new Date().toUTCString() + ';path=/'
              );
          }
        });

        setTimeout(() => {
          const returnUrl = `${window.location.pathname.replace(
            /[^/]*$/,
            'review'
          )}#${id}`;
          this.apiHttpService
            .setEndpointUrl(`/connectors/${id}/credentials`)
            .post<AcquisitionResponse>({ returnUrl })
            .subscribe(response => {
              document.cookie = response.state.spec;
              setTimeout(() => {
                window.location.href = response.redirectUrl;
                observer.next(response);
                observer.complete();
              }, 30);
            });
        }, 30);
      }, 30);
    });
  }
}
