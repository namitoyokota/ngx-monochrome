import { Component } from '@angular/core';
import { NyColor, NyFitType, NyIconConfig, NyIconSize, NyIconType, NySize } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly iconConfig1 = new NyIconConfig('fa-home', NyIconType.solid, NyIconSize.small);
    readonly iconConfig2 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.small, NyColor.red);
    readonly iconConfig3 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.medium, NyColor.blue);
    readonly iconConfig4 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.yellow);
    readonly iconConfig5 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.white);
    readonly fit = NyFitType.width;
    readonly NyColor: typeof NyColor = NyColor;
    readonly NySize: typeof NySize = NySize;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
