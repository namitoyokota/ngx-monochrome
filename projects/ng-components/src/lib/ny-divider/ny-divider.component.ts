import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-divider',
    templateUrl: 'ny-divider.component.html',
    styleUrls: ['ny-divider.component.scss'],
})
export class NyDividerComponent {
    /** Dark mode */
    @Input() dark = true;
}
