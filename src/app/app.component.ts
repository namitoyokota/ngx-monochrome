import { Component } from '@angular/core';
import { MonoFitType, MonoIconConfig, MonoIconSize, MonoIconType, MonoMenuOption, MonoSize } from 'ngx-monochrome';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Wether the page is in dark mode */
    darkMode = false;

    /** Toggles current theme */
    toggleTheme(menu: MonoMenuOption): void {
        this.darkMode = menu.icon.name === 'fa-sun';

        this.iconConfig1.dark = this.darkMode;
        this.iconConfig2.dark = this.darkMode;
        this.iconConfig3.dark = this.darkMode;
    }

    // Icon Configurations
    readonly iconConfig1 = new MonoIconConfig('fa-star', MonoIconType.solid, MonoIconSize.small, this.darkMode);
    readonly iconConfig2 = new MonoIconConfig('fa-bookmark', MonoIconType.solid, MonoIconSize.medium, this.darkMode);
    readonly iconConfig3 = new MonoIconConfig('fa-magnifying-glass', MonoIconType.solid, MonoIconSize.large, this.darkMode);

    /** Configurations to display close icon */
    readonly infoIconConfig = new MonoIconConfig('fa-circle-info', MonoIconType.solid, MonoIconSize.medium, false, false);
    readonly questionIconConfig = new MonoIconConfig('fa-circle-question', MonoIconType.solid, MonoIconSize.medium, false, false);

    readonly menuOptionsLight = [new MonoMenuOption('Option 1', this.iconConfig1), new MonoMenuOption('Option 2', this.iconConfig1)];
    readonly menuOptionsDark = [new MonoMenuOption('Option 1', this.iconConfig2), new MonoMenuOption('Option 2', this.iconConfig2)];

    readonly buttonOptionsLight = [
        new MonoMenuOption('Button Group 1', this.iconConfig2),
        new MonoMenuOption('Button Group 2', this.iconConfig2),
    ];
    readonly buttonOptionsDark = [
        new MonoMenuOption('Button Group 1', this.iconConfig1),
        new MonoMenuOption('Button Group 2', this.iconConfig1),
    ];

    readonly fit = MonoFitType.width;
    readonly MonoSize: typeof MonoSize = MonoSize;

    show = false;

    echo(text?: string, value?: string): void {
        console.log(text, value ? ': ' + value : '');
    }
}
