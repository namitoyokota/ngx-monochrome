import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';

@Component({
    selector: 'ny-icon',
    templateUrl: 'ny-icon.component.html',
    styleUrls: ['ny-icon.component.scss'],
})
export class NyIconComponent {
    /** Configurations for the icon */
    @Input() config: NyIconConfig = new NyIconConfig();

    /** Event fired when icon is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on icon click */
    iconClicked(): void {
        if (this.config.clickable) {
            this.clicked.emit();
        }
    }
}
