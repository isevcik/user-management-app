import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

    constructor(private readonly location: Location) { }

    @Input() title: string;
    @Input() showGoBackButton: boolean;
    @Input() showNewButton: boolean;

    onGoBackButtonClick() {
        this.location.back();
    }

    ngOnInit() {
    }
}
