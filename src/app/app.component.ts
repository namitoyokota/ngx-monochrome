import { Component } from '@angular/core';
import { NyFitType, NyIconConfig, NyIconSize, NyIconType, NyMenuOption, NySize } from 'ngx-monochrome';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Wether the page is in dark mode */
    darkMode = false;

    /** Toggles current theme */
    toggleTheme(menu: NyMenuOption): void {
        this.darkMode = menu.icon.name === 'fa-sun';

        this.iconConfig1.dark = this.darkMode;
        this.iconConfig2.dark = this.darkMode;
        this.iconConfig3.dark = this.darkMode;
    }

    // Icon Configurations
    readonly iconConfig1 = new NyIconConfig('fa-star', NyIconType.solid, NyIconSize.small, this.darkMode);
    readonly iconConfig2 = new NyIconConfig('fa-bookmark', NyIconType.solid, NyIconSize.medium, this.darkMode);
    readonly iconConfig3 = new NyIconConfig('fa-magnifying-glass', NyIconType.solid, NyIconSize.large, this.darkMode);

    /** Configurations to display close icon */
    readonly infoIconConfig = new NyIconConfig('fa-circle-info', NyIconType.solid, NyIconSize.medium, false, false);
    readonly questionIconConfig = new NyIconConfig('fa-circle-question', NyIconType.solid, NyIconSize.medium, false, false);

    readonly menuOptionsLight = [new NyMenuOption('Option 1', this.iconConfig1), new NyMenuOption('Option 2', this.iconConfig1)];
    readonly menuOptionsDark = [new NyMenuOption('Option 1', this.iconConfig2), new NyMenuOption('Option 2', this.iconConfig2)];

    readonly buttonOptionsLight = [
        new NyMenuOption('Button Group 1', this.iconConfig2),
        new NyMenuOption('Button Group 2', this.iconConfig2),
    ];
    readonly buttonOptionsDark = [
        new NyMenuOption('Button Group 1', this.iconConfig1),
        new NyMenuOption('Button Group 2', this.iconConfig1),
    ];

    readonly fit = NyFitType.width;
    readonly NySize: typeof NySize = NySize;

    show = false;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
