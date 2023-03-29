import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-message',
    templateUrl: 'ny-message.component.html',
    styleUrls: ['ny-message.component.scss'],
})
export class NyMessageComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Icon to display inside button */
    @Input() icon = '';

    /** Dark mode */
    @Input() dark = false;
}
