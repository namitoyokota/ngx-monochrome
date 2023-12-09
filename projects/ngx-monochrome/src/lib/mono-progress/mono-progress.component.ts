import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-progress',
    templateUrl: 'mono-progress.component.html',
    styleUrls: ['mono-progress.component.scss'],
})
export class MonoProgressComponent {
    /** Current progress */
    @Input() value = 50;
}
