import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-card',
    templateUrl: 'ny-card.component.html',
    styleUrls: ['ny-card.component.scss'],
})
export class NyCardComponent {
    /** Whether to display in dark mode */
    @Input() dark = false;
}
