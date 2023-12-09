import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-link',
    templateUrl: 'mono-link.component.html',
    styleUrls: ['mono-link.component.scss'],
})
export class MonoLinkComponent {
    /** Link to navigate on click */
    @Input() src = '';

    /** Text to display to user */
    @Input() text = '';

    /** Dark mode */
    @Input() dark = false;
}
