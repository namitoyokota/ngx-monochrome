import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-expand',
    templateUrl: 'ny-expand.component.html',
    styleUrls: ['ny-expand.component.scss'],
})
export class NyExpandComponent {
    /** Text to display as a button */
    @Input() title = '';

    /** Description to display on title click */
    @Input() description = '';

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Wether to display description by expanding */
    showDescription = true;

    /** Show or hide description */
    toggleExpansion(): void {
        this.showDescription = !this.showDescription;
    }
}
