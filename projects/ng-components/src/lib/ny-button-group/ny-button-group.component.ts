import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyColor } from '../abstractions/ny-color';
import { NyMenuOption } from '../abstractions/ny-menu-option';

@Component({
    selector: 'ny-button-group',
    templateUrl: 'ny-button-group.component.html',
    styleUrls: ['ny-button-group.component.scss'],
})
export class NyButtonGroupComponent {
    /** List of button configs to display */
    @Input() buttons: NyMenuOption[] = [];

    /** Color of the button */
    @Input() color = NyColor.white;

    /** Event fired when button is clicked */
    @Output() clicked = new EventEmitter<NyMenuOption>();

    /** Triggered on button click */
    buttonClicked(button: NyMenuOption): void {
        this.clicked.emit(button);
    }
}
