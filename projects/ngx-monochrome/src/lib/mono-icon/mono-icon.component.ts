import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';

@Component({
    selector: 'mono-icon',
    templateUrl: 'mono-icon.component.html',
    styleUrls: ['mono-icon.component.scss'],
})
export class MonoIconComponent {
    /** Configurations for the icon */
    @Input() config: MonoIconConfig = new MonoIconConfig();

    /** Event fired when icon is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on icon click */
    iconClicked(): void {
        if (this.config.clickable) {
            this.clicked.emit();
        }
    }
}
