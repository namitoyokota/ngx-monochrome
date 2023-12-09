import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-legend',
    templateUrl: 'mono-legend.component.html',
    styleUrls: ['mono-legend.component.scss'],
})
export class MonoLegendComponent {
    /** Header text */
    @Input() text = '';
}
