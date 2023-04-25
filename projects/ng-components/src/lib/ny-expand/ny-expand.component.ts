import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-expand',
    templateUrl: 'ny-expand.component.html',
    styleUrls: ['ny-expand.component.scss'],
})
export class NyExpandComponent {
    /** Text to display as a button */
    @Input() title = '';

    /** Wether to display content by expanding */
    @Input() show = true;

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Show or hide content */
    toggleExpansion(): void {
        this.show = !this.show;
    }
}
