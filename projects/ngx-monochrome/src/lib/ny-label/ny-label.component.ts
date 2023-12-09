import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';
import { NyIconSize } from '../abstractions/ny-icon-size';
import { NyIconType } from '../abstractions/ny-icon-type';

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

    /** Configurations to display close icon - light version */
    readonly closeIconLight = new NyIconConfig('fa-xmark', NyIconType.solid, NyIconSize.medium, true, true);

    /** Configurations to display close icon - dark version */
    readonly closeIconDark = new NyIconConfig('fa-xmark', NyIconType.solid, NyIconSize.medium, false, true);

    /** Triggered on close click */
    closeLabel(): void {
        this.closed.emit();
    }
}
