import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { UserStorageService } from 'src/services/user-storage.service';
import { User } from 'src/services/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    userForm = this.fb.group({
        number: ['', [Validators.required]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['']
    })

    userLabel: string;
    userId: string;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly fb: FormBuilder,
        private readonly snackBar: MatSnackBar,
        private readonly userStorageService: UserStorageService
    ) { }

    onSubmitClick() {
        const user: User = this.userForm.value;

        if (this.userId) {
            this.userStorageService.put(this.userId, user)
                .subscribe(() => this.snackBar.open("User updated"))
        } else {
            this.userStorageService.post(user)
                .subscribe(user => this.router.navigate(['user-edit', user._id])
                    .then(() => this.snackBar.open("User created")));
        }
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');

            if (id) {
                this.userStorageService.get(id).subscribe(user => {
                    this.userForm.patchValue(user);
                    this.userLabel = `${user.firstName} ${user.lastName}`;
                    this.userId = user._id;
                });
            }
        });
    }
}
