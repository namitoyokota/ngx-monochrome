import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mono-expand',
    templateUrl: 'mono-expand.component.html',
    styleUrls: ['mono-expand.component.scss'],
})
export class MonoExpandComponent {
    /** Text to display as a button */
    @Input() title = '';

    /** Whether to display in dark mode */
    @Input() dark = false;

    /** Wether to display content by expanding */
    @Input() show = true;

    /** Two-way binding for show property */
    @Output() showChange = new EventEmitter<boolean>();

    /** Show or hide content */
    toggleExpansion(): void {
        this.show = !this.show;
        this.showChange.emit(this.show);
    }
}
