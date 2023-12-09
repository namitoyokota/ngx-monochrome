import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-page',
    templateUrl: 'ny-page.component.html',
    styleUrls: ['ny-page.component.scss'],
})
export class NyPageComponent {
    /** Whether to display in dark mode */
    @Input() dark = false;
}
