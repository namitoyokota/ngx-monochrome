import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';
import { NyIconSize } from '../abstractions/ny-icon-size';
import { NyIconType } from '../abstractions/ny-icon-type';

@Component({
    selector: 'ny-input',
    templateUrl: 'ny-input.component.html',
    styleUrls: ['ny-input.component.scss'],
})
export class NyInputComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Placeholder to display in input */
    @Input() placeholder = '';

    /** Configurations for the icon */
    @Input() iconConfig: NyIconConfig;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display clear text button */
    @Input() clear = false;

    /** Event fired when a input is changed */
    @Output() changed = new EventEmitter<string>();

    /** Event fired when a enter is pressed */
    @Output() searched = new EventEmitter<string>();

    /** Configurations to display close icon (light version) */
    readonly closeIconConfigLight = new NyIconConfig('fa-xmark', NyIconType.solid, NyIconSize.medium, false, true);

    /** Configurations to display close icon (light version) */
    readonly closeIconConfigDark = new NyIconConfig('fa-xmark', NyIconType.solid, NyIconSize.medium, true, true);

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
