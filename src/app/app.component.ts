import { Component } from '@angular/core';
import { FitType } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly fit = FitType.height;
}
