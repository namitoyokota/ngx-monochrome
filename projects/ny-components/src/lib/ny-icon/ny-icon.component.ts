import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-icon',
    templateUrl: './ny-icon.component.html',
    styleUrls: ['./ny-icon.component.scss'],
})
export class NyIconComponent {
    /** Name of the font awesome icon */
    @Input() name: string = '';
}
