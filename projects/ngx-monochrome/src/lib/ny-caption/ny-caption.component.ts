import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-caption',
    templateUrl: 'ny-caption.component.html',
    styleUrls: ['ny-caption.component.scss'],
})
export class NyCaptionComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Whether to display in dark mode */
    @Input() dark = false;
}
