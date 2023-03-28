import { Component, Input } from '@angular/core';
import { FitType } from '../abstractions/fit-type';

@Component({
    selector: 'ny-image',
    templateUrl: './ny-image.component.html',
    styleUrls: ['./ny-image.component.scss'],
})
export class NyImageComponent {
    /** Path of the image */
    @Input() src: string = '';

    /** Direction to fit image */
    @Input() fit: FitType = FitType.height;

    /** Indicates whether image has loaded */
    loaded = false;
}
