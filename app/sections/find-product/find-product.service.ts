import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ProductModelLight }    from '../../_model/product/ProductModelLight.ts';

@Injectable()
export class FindProductService {
    constructor (private http: Http) {}

    private findProductsUrl = '/app/test-data/product/product-light.json';

    findProducts (): Observable<ProductModelLight[]> {
          return this.http.get(this.findProductsUrl)
                          .map(this.extractData)
                          .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
