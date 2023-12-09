import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';
import { MonoIconSize } from '../abstractions/mono-icon-size';
import { MonoIconType } from '../abstractions/mono-icon-type';

@Component({
    selector: 'mono-label',
    templateUrl: 'mono-label.component.html',
    styleUrls: ['mono-label.component.scss'],
})
export class MonoLabelComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Dark mode */
    @Input() dark = false;

    /** Close label */
    @Input() close = false;

    /** Event fired when a closed is clicked */
    @Output() closed = new EventEmitter<void>();

    /** Configurations to display close icon - light version */
    readonly closeIconLight = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, true, true);

    /** Configurations to display close icon - dark version */
    readonly closeIconDark = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, false, true);

    /** Triggered on close click */
    closeLabel(): void {
        this.closed.emit();
    }
}
