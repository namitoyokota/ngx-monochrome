import { Component, EventEmitter, Input, Output } from '@angular/core';

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

    /** Label for the input */
    @Input() label = '';

    /** Error to display */
    @Input() error = '';

    /** Whether to display clear text button */
    @Input() clear = false;

    /** Event fired when a input is changed */
    @Output() changed = new EventEmitter<string>();

    /** Event fired when a enter is pressed */
    @Output() searched = new EventEmitter<string>();

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
