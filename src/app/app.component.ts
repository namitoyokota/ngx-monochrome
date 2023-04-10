import { Component } from '@angular/core';
import { NyColor, NyFitType, NyIconConfig, NyIconSize, NyIconType, NyLogoColor, NyMenuOption, NySize } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // Small Icon Configurations
    readonly iconConfig1 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small);
    readonly iconConfig2 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, true);

    // Medium Icon Configurations
    readonly iconConfig3 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium);
    readonly iconConfig4 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, true);

    // Large Icon Configurations
    readonly iconConfig5 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large);
    readonly iconConfig6 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, true);

    /** Configurations to display close icon */
    readonly infoIconConfig = new NyIconConfig('fa-circle-info', NyIconType.solid, NyIconSize.medium, false, false);
    readonly questionIconConfig = new NyIconConfig('fa-circle-question', NyIconType.solid, NyIconSize.medium, false, false);

    readonly menuOptions = [new NyMenuOption('Option 1', this.iconConfig1), new NyMenuOption('Option 2', this.iconConfig1)];
    readonly buttonOptionsLight = [
        new NyMenuOption('Button Group 1', this.iconConfig2),
        new NyMenuOption('Button Group 2', this.iconConfig2),
    ];
    readonly buttonOptionsDark = [
        new NyMenuOption('Button Group 1', this.iconConfig1),
        new NyMenuOption('Button Group 2', this.iconConfig1),
    ];

    readonly fit = NyFitType.width;
    readonly NyColor: typeof NyColor = NyColor;
    readonly NySize: typeof NySize = NySize;
    readonly NyLogoColor: typeof NyLogoColor = NyLogoColor;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
