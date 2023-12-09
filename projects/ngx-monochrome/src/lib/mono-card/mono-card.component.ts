import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-card',
    templateUrl: 'mono-card.component.html',
    styleUrls: ['mono-card.component.scss'],
})
export class MonoCardComponent {
    /** Whether to display in dark mode */
    @Input() dark = false;
}
