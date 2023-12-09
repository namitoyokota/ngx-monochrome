import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-page',
    templateUrl: 'mono-page.component.html',
    styleUrls: ['mono-page.component.scss'],
})
export class MonoPageComponent {
    /** Whether to display in dark mode */
    @Input() dark = false;
}
