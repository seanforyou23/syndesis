import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseEntity, ApiHttpService } from '@syndesis/ui/platform';

export abstract class RESTService<T extends BaseEntity, L extends Array<T>> {
  protected constructor(
    public apiHttpService: ApiHttpService,
    public endpoint: string,
    public kind: string
  ) {}

  get(id: string): Observable<T> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment(id))
      .get();
  }

  list(): Observable<L> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment())
      .get()
      .pipe(
        map(
          (response: any) =>
            Array.isArray(response) ? response : response.items || ([] as L)
        )
      );
  }

  create(obj: T): Observable<T> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment())
      .post(obj);
  }

  update(obj: T): Observable<T> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment(obj.id))
      .put(obj)
      .pipe(
        map((response: any) => (response !== null ? response : [])),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  delete(obj: T): Observable<any> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment(obj.id))
      .delete();
  }

  patch(id: string, attributes: any): Observable<any> {
    return this.apiHttpService
      .setEndpointUrl(this.getEndpointSegment(id))
      .patch(attributes);
  }

  private getEndpointSegment(id?: string): string {
    return id ? `/${this.endpoint}/${id}` : `/${this.endpoint}`;
  }
}
