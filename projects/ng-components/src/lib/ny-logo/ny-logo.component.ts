import { Component, Input } from '@angular/core';
import { NySize } from '../abstractions/ny-size';

@Component({
    selector: 'ny-logo',
    templateUrl: 'ny-logo.component.html',
    styleUrls: ['ny-logo.component.scss'],
})
export class NyLogoComponent {
    /** Size of the icon */
    @Input() size = NySize.medium;

    /** Expose NySize to HTML */
    NySize: typeof NySize = NySize;
}
