import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-divider',
    templateUrl: 'mono-divider.component.html',
    styleUrls: ['mono-divider.component.scss'],
})
export class MonoDividerComponent {
    /** Dark mode */
    @Input() dark = true;
}
