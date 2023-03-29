import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-link',
    templateUrl: './ny-link.component.html',
    styleUrls: ['./ny-link.component.scss'],
})
export class NyLinkComponent {
    /** Link to navigate on click */
    @Input() src = '';

    /** Text to display to user */
    @Input() text = '';

    /** Dark mode */
    @Input() dark = false;
}
