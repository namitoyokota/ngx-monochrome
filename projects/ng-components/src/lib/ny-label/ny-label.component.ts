import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ny-label',
    templateUrl: 'ny-label.component.html',
    styleUrls: ['ny-label.component.scss'],
})
export class NyLabelComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Dark mode */
    @Input() dark = false;

    /** Close label */
    @Input() close = false;

    /** Event fired when a closed is clicked */
    @Output() closed = new EventEmitter<void>();

    /** Triggered on close click */
    closeLabel(): void {
        this.closed.emit();
    }
}
