import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';
import { NyMenuOption } from '../abstractions/ny-menu-option';

@Component({
    selector: 'ny-menu',
    templateUrl: 'ny-menu.component.html',
    styleUrls: ['ny-menu.component.scss'],
})
export class NyMenuComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Configurations for the icon */
    @Input() iconConfig: NyIconConfig;

    /** List of options to display */
    @Input() options: NyMenuOption[] = [];

    /** Sends event on option select */
    @Output() selected = new EventEmitter<NyMenuOption>();

    /** Whether context menu is opened */
    showMenu = false;

    constructor() {}

    /** Opens or closes menu */
    toggleMenu(): void {
        this.showMenu = !this.showMenu;
    }

    /** Hides context menu when clicked outside */
    hideMenu(): void {
        this.showMenu = false;
    }

    /** Triggered on option select */
    selectOption($event: NyMenuOption): void {
        this.selected.emit($event);
        this.hideMenu();
    }
}
