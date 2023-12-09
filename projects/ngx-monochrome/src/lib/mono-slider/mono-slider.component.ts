import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mono-slider',
    templateUrl: 'mono-slider.component.html',
    styleUrls: ['mono-slider.component.scss'],
})
export class MonoSliderComponent {
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
