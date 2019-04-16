import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { UserStorageService } from 'src/services/user-storage.service';
import { User } from 'src/services/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    constructor(
        private readonly userStorageService: UserStorageService,
        private readonly router: Router
    ) { }

    displayedColumns = ['number', 'firstName', 'lastName', 'email', 'age'];

    users: MatTableDataSource<User>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.userStorageService.getList().subscribe(users => {
            this.users = new MatTableDataSource<User>(users);
            this.users.paginator = this.paginator;
            this.users.sort = this.sort;
        });
    }

    rowClicked(user: User) {
        this.router.navigate(['user-edit', user._id])
    }
}
