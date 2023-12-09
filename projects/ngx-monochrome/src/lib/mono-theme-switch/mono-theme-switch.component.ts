import { Component, EventEmitter, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';
import { MonoIconSize } from '../abstractions/mono-icon-size';
import { MonoIconType } from '../abstractions/mono-icon-type';
import { MonoMenuOption } from '../abstractions/mono-menu-option';

@Component({
    selector: 'mono-theme-switch',
    templateUrl: 'mono-theme-switch.component.html',
    styleUrls: ['mono-theme-switch.component.scss'],
})
export class MonoThemeSwitchComponent {
    /** Sends event on theme select */
    @Output() changed = new EventEmitter<MonoMenuOption>();

    /** Whether to use dark theme button */
    dark = true;

    /** Icon to select light theme */
    readonly sunIcon = new MonoIconConfig('fa-sun', MonoIconType.solid, MonoIconSize.medium, true);

    /** Icon to select dark theme */
    readonly moonIcon = new MonoIconConfig('fa-moon', MonoIconType.solid, MonoIconSize.medium);

    /** Themes as options */
    readonly themes = [new MonoMenuOption('', this.moonIcon), new MonoMenuOption('', this.sunIcon)];

    /** Emits event when theme changed */
    change(theme: MonoMenuOption): void {
        this.dark = theme.icon === this.moonIcon;

        this.changed.emit(theme);
    }
}
