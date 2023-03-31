import { Component } from '@angular/core';
import { FitType, NyColor, NySize } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly fit = FitType.width;
    readonly NyColor: typeof NyColor = NyColor;
    readonly NySize: typeof NySize = NySize;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
