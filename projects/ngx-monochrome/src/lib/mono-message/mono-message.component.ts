import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';
import { MonoIconSize } from '../abstractions/mono-icon-size';
import { MonoIconType } from '../abstractions/mono-icon-type';

@Component({
    selector: 'mono-message',
    templateUrl: 'mono-message.component.html',
    styleUrls: ['mono-message.component.scss'],
})
export class MonoMessageComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Configurations for the icon */
    @Input() iconConfig: MonoIconConfig;

    /** Dark mode */
    @Input() dark = false;

    /** Close label */
    @Input() close = false;

    /** Event fired when a closed is clicked */
    @Output() closed = new EventEmitter<void>();

    /** Configurations to display close icon - black version */
    readonly blackCloseIcon = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, false, true);

    /** Configurations to display close icon - white version */
    readonly whiteCloseIcon = new MonoIconConfig('fa-xmark', MonoIconType.solid, MonoIconSize.medium, true, true);

    /** Triggered on close click */
    closeMessage(): void {
        this.closed.emit();
    }
}
