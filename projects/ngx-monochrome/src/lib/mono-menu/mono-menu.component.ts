import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonoIconConfig } from '../abstractions/mono-icon-config';
import { MonoMenuOption } from '../abstractions/mono-menu-option';

@Component({
    selector: 'mono-menu',
    templateUrl: 'mono-menu.component.html',
    styleUrls: ['mono-menu.component.scss'],
})
export class MonoMenuComponent {
    /** Text to display inside of the button */
    @Input() text = '';

    /** Configurations for the icon */
    @Input() iconConfig: MonoIconConfig;

    /** List of options to display */
    @Input() options: MonoMenuOption[] = [];

    /** Sends event on option select */
    @Output() selected = new EventEmitter<MonoMenuOption>();

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
    selectOption($event: MonoMenuOption): void {
        this.selected.emit($event);
        this.hideMenu();
    }
}
