import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-progress',
    templateUrl: 'ny-progress.component.html',
    styleUrls: ['ny-progress.component.scss'],
})
export class NyProgressComponent {
    /** Current progress */
    @Input() value = 50;
}
