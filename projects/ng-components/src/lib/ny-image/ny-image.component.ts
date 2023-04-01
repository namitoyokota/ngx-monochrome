import { Component, Input } from '@angular/core';
import { NyFitType } from '../abstractions/ny-fit-type';

@Component({
    selector: 'ny-image',
    templateUrl: 'ny-image.component.html',
    styleUrls: ['ny-image.component.scss'],
})
export class NyImageComponent {
    /** Path of the image */
    @Input() src: string = '';

    /** Direction to fit image */
    @Input() fit: NyFitType = NyFitType.height;

    /** Indicates whether image has loaded */
    loaded = false;
}
