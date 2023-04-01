import { Component, Input } from '@angular/core';
import { NyIconConfig } from '../abstractions/ny-icon-config';

@Component({
    selector: 'ny-icon',
    templateUrl: 'ny-icon.component.html',
    styleUrls: ['ny-icon.component.scss'],
})
export class NyIconComponent {
    /** Configurations for the icon */
    @Input() config: NyIconConfig = new NyIconConfig();
}
