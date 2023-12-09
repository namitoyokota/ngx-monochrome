import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-spinner',
    templateUrl: 'mono-spinner.component.html',
    styleUrls: ['mono-spinner.component.scss'],
})
export class MonoSpinnerComponent {
    /** Dark mode */
    @Input() dark = false;
}
