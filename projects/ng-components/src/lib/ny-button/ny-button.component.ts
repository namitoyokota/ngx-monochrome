import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';

@Component({
    selector: 'ny-button',
    templateUrl: 'ny-button.component.html',
    styleUrls: ['ny-button.component.scss'],
})
export class NyButtonComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Configurations for the icon */
    @Input() iconConfig: NyIconConfig;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display outline around button */
    @Input() outline = false;

    /** Event fired when button is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on button click */
    buttonClicked(): void {
        this.clicked.emit();
    }
}
