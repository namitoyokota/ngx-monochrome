import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {
    constructor(private elementToWatch: ElementRef) {}

    /** Event triggered when click is outside element */
    @Output() clickOutside = new EventEmitter();

    /** Triggered on DOM click */
    @HostListener('document:click', ['$event.target'])
    onClick(clickedElement: HTMLElement) {
        const outsideElement = !this.elementToWatch.nativeElement.contains(clickedElement);
        if (outsideElement) {
            this.clickOutside.emit(null);
        }
    }
}
