import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ny-button',
    templateUrl: 'ny-button.component.html',
    styleUrls: ['ny-button.component.scss'],
})
export class NyButtonComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Icon to display inside button */
    @Input() icon = '';

    /** Dark mode */
    @Input() dark = false;

    /** Event fired when a button is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on button click */
    buttonClicked(): void {
        this.clicked.emit();
    }
}
