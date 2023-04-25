import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-expand',
    templateUrl: 'ny-expand.component.html',
    styleUrls: ['ny-expand.component.scss'],
})
export class NyExpandComponent {
    /** Text to display as a button */
    @Input() title = '';

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Wether to display content by expanding */
    @Input('show')
    set setShow(flag: boolean) {
        this.showContent = flag;
    }

    /** Wether to display content by expanding */
    showContent = true;

    /** Show or hide content */
    toggleExpansion(): void {
        this.showContent = !this.showContent;
    }
}
