import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserRepositoryService {

    public doLogin(user: string, password: string): Observable<any> {
        return of('OK');
    }

    public createNewUser(user:string, password:string): Observable<any> {
        return of('OK');
    }

    public isSessionActive(): Observable<boolean> {
        return of(true);
    }
}