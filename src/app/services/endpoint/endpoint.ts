import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EndpointProvider {
    
    private readonly apiUrl: string = 'http://demo8454674.mockable.io';

    // All API's methods
    private readonly articleCodes: string = '/getArticleCodes';    

    // Get final Url
    private get urlArticleCodes() {
        return this.apiUrl + this.articleCodes;
    }    

    constructor(
        private http: HttpClient
    ) { }

    getArticleCodes<T>(): Observable<string[]> {
        const endpointUrl = `${this.urlArticleCodes}`;
        return this.http.get<string[]>(endpointUrl);
    }   
}

