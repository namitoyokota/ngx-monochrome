import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';

@Component({
    selector: 'mono-button',
    templateUrl: 'mono-button.component.html',
    styleUrls: ['mono-button.component.scss'],
})
export class MonoButtonComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Whether button can be clicked or not */
    @Input() disabled = false;

    /** Configurations for the icon */
    @Input() iconConfig: MonoIconConfig;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display outline around button */
    @Input() outline = false;

    /** Event fired when button is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on button click */
    buttonClicked(): void {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
