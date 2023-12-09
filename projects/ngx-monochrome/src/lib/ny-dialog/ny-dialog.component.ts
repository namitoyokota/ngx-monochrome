import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'ny-dialog',
    templateUrl: 'ny-dialog.component.html',
    styleUrls: ['ny-dialog.component.scss'],
})
export class NyDialogComponent {
    /** Button text */
    @Input() text = '';

    /** Element ref to the dialog */
    @ViewChild('dialog') dialog: ElementRef;

    constructor() {}

    /**
     * Opens dialog on button click
     */
    open(): void {
        this.dialog.nativeElement.showModal();
    }

    /**
     * Closes dialog on click outside
     */
    close(): void {
        this.dialog.nativeElement.close();
    }
}
