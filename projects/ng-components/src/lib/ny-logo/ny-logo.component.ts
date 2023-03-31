import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NySize } from '../abstractions/ny-size';

@Component({
    selector: 'ny-logo',
    templateUrl: 'ny-logo.component.html',
    styleUrls: ['ny-logo.component.scss'],
})
export class NyLogoComponent {
    /** Size of the icon */
    @Input() size = NySize.medium;

    /** Whether icon can be clicked */
    @Input() clickable = false;

    /** Expose NySize to HTML */
    NySize: typeof NySize = NySize;

    /** Event fired when logo is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Triggered on logo click */
    logoClicked(): void {
        if (this.clickable) {
            this.clicked.emit();
        }
    }
}
