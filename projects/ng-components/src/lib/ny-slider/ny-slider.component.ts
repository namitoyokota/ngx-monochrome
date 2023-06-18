import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ny-slider',
    templateUrl: 'ny-slider.component.html',
    styleUrls: ['ny-slider.component.scss'],
})
export class NySliderComponent {
    /** Current value */
    @Input() value = 50;

    /** Event fired when a enter is pressed */
    @Output() changed = new EventEmitter<number>();

    constructor() {}

    /**
     * Triggered on range change
     * @param $event Value of the input
     */
    valueChanged($event: any): void {
        this.changed.emit($event.target.value);
    }
}
