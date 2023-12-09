import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoMenuOption } from '../abstractions/mono-menu-option';

@Component({
    selector: 'mono-button-group',
    templateUrl: 'mono-button-group.component.html',
    styleUrls: ['mono-button-group.component.scss'],
})
export class MonoButtonGroupComponent {
    /** List of button configs to display */
    @Input() buttons: MonoMenuOption[] = [];

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display outline around button */
    @Input() outline = false;

    /** Event fired when button is clicked */
    @Output() clicked = new EventEmitter<MonoMenuOption>();

    /** Triggered on button click */
    buttonClicked(button: MonoMenuOption): void {
        this.clicked.emit(button);
    }
}
