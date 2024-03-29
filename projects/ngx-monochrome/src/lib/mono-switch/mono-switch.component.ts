import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoMenuOption } from '../abstractions/mono-menu-option';

@Component({
    selector: 'mono-switch',
    templateUrl: 'mono-switch.component.html',
    styleUrls: ['mono-switch.component.scss'],
})
export class MonoSwitchComponent {
    /** List of options to switch between */
    @Input('options')
    set setOptions(options: MonoMenuOption[]) {
        this.options = options;

        this.optionLength = this.options.length;
        if (this.optionLength) {
            this.currentOption = this.options[0];
            this.currentIndex = 0;
        }
    }

    /** Dark mode */
    @Input() dark = false;

    /** Sends event on option select */
    @Output() changed = new EventEmitter<MonoMenuOption>();

    /** Currently displayed option */
    currentOption: MonoMenuOption;

    /** List of options to switch between */
    options: MonoMenuOption[] = [];

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
