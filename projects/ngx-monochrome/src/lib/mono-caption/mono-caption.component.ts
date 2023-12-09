import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-caption',
    templateUrl: 'mono-caption.component.html',
    styleUrls: ['mono-caption.component.scss'],
})
export class MonoCaptionComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Whether to display in dark mode */
    @Input() dark = false;
}
