import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyLogoColor } from '../abstractions/ny-logo-color';
import { NySize } from '../abstractions/ny-size';

@Component({
    selector: 'ny-logo',
    templateUrl: 'ny-logo.component.html',
    styleUrls: ['ny-logo.component.scss'],
})
export class NyLogoComponent {
    /** Color of the icon to display */
    @Input('color')
    set setColor(color: NyLogoColor) {
        switch (color) {
            case NyLogoColor.blue:
                this.path = 'assets/logo-blue.svg';
                break;
            case NyLogoColor.grey:
                this.path = 'assets/logo-grey.svg';
                break;
            case NyLogoColor.navy:
                this.path = 'assets/logo-navy.svg';
                break;
            case NyLogoColor.white:
                this.path = 'assets/logo-white.svg';
                break;
            case NyLogoColor.yellow:
                this.path = 'assets/logo-yellow.svg';
                break;
            case NyLogoColor.black:
            default:
                this.path = 'assets/logo-black.svg';
        }
    }

    /** Size of the icon */
    @Input() size = NySize.medium;

    /** Whether icon can be clicked */
    @Input() clickable = false;

    /** Event fired when logo is clicked */
    @Output() clicked = new EventEmitter<void>();

    /** Path of the logo icon */
    path = 'assets/logo-black.svg';

    /** Expose NySize to HTML */
    readonly NySize: typeof NySize = NySize;

    /** Triggered on logo click */
    logoClicked(): void {
        if (this.clickable) {
            this.clicked.emit();
        }
    }
}
