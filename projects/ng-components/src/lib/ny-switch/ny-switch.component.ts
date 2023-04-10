import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyMenuOption } from '../abstractions/ny-menu-option';

@Component({
    selector: 'ny-switch',
    templateUrl: 'ny-switch.component.html',
    styleUrls: ['ny-switch.component.scss'],
})
export class NySwitchComponent {
    /** List of options to switch between */
    @Input('options')
    set setOptions(options: NyMenuOption[]) {
        this.options = options;

        this.optionLength = this.options.length;
        if (this.optionLength) {
            this.currentOption = this.options[0];
            this.currentIndex = 0;
        }
    }

    /** Sends event on option select */
    @Output() changed = new EventEmitter<NyMenuOption>();

    /** Currently displayed option */
    currentOption: NyMenuOption;

    /** List of options to switch between */
    options: NyMenuOption[] = [];

    private currentIndex = 0;

    private optionLength = 0;

    constructor() {}

    /** Switches option to next up */
    switch(): void {
        if (this.currentIndex + 1 >= this.optionLength) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }

        this.currentOption = this.options[this.currentIndex];

        this.change();
    }

    /** Emits event when option is switched */
    change(): void {
        this.changed.emit(this.currentOption);
    }
}
