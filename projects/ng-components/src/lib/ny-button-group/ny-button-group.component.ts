import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyMenuOption } from '../abstractions/ny-menu-option';

@Component({
    selector: 'ny-button-group',
    templateUrl: 'ny-button-group.component.html',
    styleUrls: ['ny-button-group.component.scss'],
})
export class NyButtonGroupComponent {
    /** List of button configs to display */
    @Input() buttons: NyMenuOption[] = [];

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Whether to display outline around button */
    @Input() outline = false;

    /** Event fired when button is clicked */
    @Output() clicked = new EventEmitter<NyMenuOption>();

    /** Triggered on button click */
    buttonClicked(button: NyMenuOption): void {
        this.clicked.emit(button);
    }
}
