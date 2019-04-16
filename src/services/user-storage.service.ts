import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './user.model';
import { usersMock } from './users.mock';

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {
    private data: User[] = usersMock;

    public getList(): Observable<User[]> {
        return of(this.data);
    }

    public get(id: string): Observable<User> {
        return of(this.data.filter(user => user._id === id)[0]);
    }

    public put(id: string, user: User): Observable<User> {
        const dest = this.data.find(user => user._id === id);
        const data = Object.assign({}, user);

        delete data._id;

        Object.assign(dest, data);
        return of(dest);
    }

    public post(user: User): Observable<User> {
        user._id = this.newId();
        this.data.push(user);

        return of(user);
    }

    private newId() {
        return Math.random().toString(36).substr(2, 9);
    }
}
