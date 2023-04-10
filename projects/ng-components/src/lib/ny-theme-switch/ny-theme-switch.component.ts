import { Component, EventEmitter, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';
import { NyIconSize } from '../abstractions/ny-icon-size';
import { NyIconType } from '../abstractions/ny-icon-type';
import { NyMenuOption } from '../abstractions/ny-menu-option';

@Component({
    selector: 'ny-theme-switch',
    templateUrl: 'ny-theme-switch.component.html',
    styleUrls: ['ny-theme-switch.component.scss'],
})
export class NyThemeSwitchComponent {
    /** Sends event on theme select */
    @Output() changed = new EventEmitter<NyMenuOption>();

    /** Whether to use dark theme button */
    dark = false;

    /** Icon to select light theme */
    readonly sunIcon = new NyIconConfig('fa-sun', NyIconType.solid, NyIconSize.medium, true);

    /** Icon to select dark theme */
    readonly moonIcon = new NyIconConfig('fa-moon', NyIconType.solid, NyIconSize.medium);

    /** Themes as options */
    readonly themes = [new NyMenuOption('', this.sunIcon), new NyMenuOption('', this.moonIcon)];

    /** Emits event when theme changed */
    change(theme: NyMenuOption): void {
        this.dark = theme.icon === this.moonIcon;

        this.changed.emit(theme);
    }
}
