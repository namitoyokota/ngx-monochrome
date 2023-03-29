import { Component, EventEmitter, Input, Output } from '@angular/core';

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

    /** Close label */
    @Input() close = false;

    /** Event fired when a closed is clicked */
    @Output() closed = new EventEmitter<void>();

    /** Triggered on close click */
    closeMessage(): void {
        this.closed.emit();
    }
}
