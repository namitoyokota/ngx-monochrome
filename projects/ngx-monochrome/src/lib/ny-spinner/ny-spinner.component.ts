import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-spinner',
    templateUrl: 'ny-spinner.component.html',
    styleUrls: ['ny-spinner.component.scss'],
})
export class NySpinnerComponent {
    /** Dark mode */
    @Input() dark = false;
}
