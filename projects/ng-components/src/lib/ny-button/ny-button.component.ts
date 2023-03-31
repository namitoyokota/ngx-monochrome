import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyColor } from '../abstractions/ny-color';

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

    /** Color of the button */
    @Input() color = NyColor.white;

    /** Whether to display outline around button */
    @Input() outline = false;

    /** Event fired when a button is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on button click */
    buttonClicked(): void {
        this.clicked.emit();
    }
}
