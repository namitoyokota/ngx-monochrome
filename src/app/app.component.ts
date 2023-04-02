import { Component } from '@angular/core';
import { NyColor, NyFitType, NyIconConfig, NyIconSize, NyIconType, NyLogoColor, NyMenuOption, NySize } from '@namitoyokota/ng-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // Small Icon Configurations
    readonly iconConfig1 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, NyColor.black);
    readonly iconConfig2 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, NyColor.red);
    readonly iconConfig3 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, NyColor.blue);
    readonly iconConfig4 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, NyColor.yellow);
    readonly iconConfig5 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, NyColor.white);

    // Medium Icon Configurations
    readonly iconConfig6 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, NyColor.black);
    readonly iconConfig7 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, NyColor.red);
    readonly iconConfig8 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, NyColor.blue);
    readonly iconConfig9 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, NyColor.yellow);
    readonly iconConfig10 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, NyColor.white);

    // Large Icon Configurations
    readonly iconConfig11 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.black);
    readonly iconConfig12 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.red);
    readonly iconConfig13 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.blue);
    readonly iconConfig14 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.yellow);
    readonly iconConfig15 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, NyColor.white);

    /** Configurations to display close icon */
    readonly infoIconConfig = new NyIconConfig('fa-circle-info', NyIconType.solid, NyIconSize.medium, NyColor.black, false);
    readonly questionIconConfig = new NyIconConfig('fa-circle-question', NyIconType.solid, NyIconSize.medium, NyColor.white, false);

    readonly menuOptions = [new NyMenuOption('Option 1', this.iconConfig7), new NyMenuOption('Option 2', this.iconConfig8)];
    readonly buttonOptions = [new NyMenuOption('Button Group 1', this.iconConfig9), new NyMenuOption('Button Group 2', this.iconConfig9)];

    readonly fit = NyFitType.width;
    readonly NyColor: typeof NyColor = NyColor;
    readonly NySize: typeof NySize = NySize;
    readonly NyLogoColor: typeof NyLogoColor = NyLogoColor;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
