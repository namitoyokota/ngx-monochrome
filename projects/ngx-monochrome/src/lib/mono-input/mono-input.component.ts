import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';
import { MonoIconSize } from '../abstractions/mono-icon-size';
import { MonoIconType } from '../abstractions/mono-icon-type';

@Component({
    selector: 'mono-input',
    templateUrl: 'mono-input.component.html',
    styleUrls: ['mono-input.component.scss'],
})
export class MonoInputComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Placeholder to display in input */
    @Input() placeholder = '';

    /** Configurations for the icon */
    @Input() iconConfig: MonoIconConfig;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display clear text button */
    @Input() clear = false;

    /** Event fired when a input is changed */
    @Output() changed = new EventEmitter<string>();

    /** Event fired when a enter is pressed */
    @Output() searched = new EventEmitter<string>();

    /** Configurations to display close icon (light version) */
    readonly closeIconConfigLight = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, false, true);

    /** Configurations to display close icon (light version) */
    readonly closeIconConfigDark = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, true, true);

    /** Triggered on clear icon click */
    clearText(): void {
        this.text = '';
        this.textChanged();
    }

    /** Triggered on input text change */
    textChanged(): void {
        this.changed.emit(this.text);
    }

    /** Triggered on enter input */
    search(): void {
        this.searched.emit(this.text);
    }
}
