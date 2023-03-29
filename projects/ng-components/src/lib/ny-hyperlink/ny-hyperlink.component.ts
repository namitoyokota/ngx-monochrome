import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-hyperlink',
    templateUrl: './ny-hyperlink.component.html',
    styleUrls: ['./ny-hyperlink.component.scss'],
})
export class NyHyperlinkComponent {
    /** Link to navigate on click */
    @Input() src = '';

    /** Text to display to user */
    @Input() text = '';

    /** Dark mode */
    @Input() dark = false;
}
