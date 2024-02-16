import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mono-textarea',
    templateUrl: 'mono-textarea.component.html',
    styleUrls: ['mono-textarea.component.scss'],
})
export class MonoTextareaComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Placeholder to display in input */
    @Input() placeholder = '';

    /** Number of rows to display on default */
    @Input() rows = 5;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Event fired when a input is changed */
    @Output() changed = new EventEmitter<string>();

    constructor() { }

    /** Triggered on input text change */
    textChanged(): void {
        this.changed.emit(this.text);
    }
}
