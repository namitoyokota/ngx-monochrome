import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-icon',
    templateUrl: './ny-icon.component.html',
    styleUrls: ['./ny-icon.component.scss'],
})
export class NyIconComponent {
    /** Name of the font awesome icon */
    @Input() name = 'fa-face-smile';

    /** Type of the icon */
    @Input() type = 'fa-solid';

    /** Size of the icon */
    @Input() size = '';

    /** Whether to display border */
    @Input() border = false;

    /** Whether icon can be clicked */
    @Input() clickable = false;

    /** Dark mode */
    @Input() dark = false;

    /** Spin icon */
    @Input() spin = false;
}
