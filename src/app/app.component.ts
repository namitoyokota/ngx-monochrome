import { Component } from '@angular/core';
import { FitType } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly fit = FitType.width;

    /** Triggered on button click event */
    buttonClick(): void {
        console.log('button clicked!');
    }

    /** Triggered on label close event */
    labelClosed(): void {
        console.log('label closed');
    }
}
