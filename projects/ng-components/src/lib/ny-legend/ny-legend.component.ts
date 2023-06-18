import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-legend',
    templateUrl: 'ny-legend.component.html',
    styleUrls: ['ny-legend.component.scss'],
})
export class NyLegendComponent {
    /** Header text */
    @Input() text = '';
}
