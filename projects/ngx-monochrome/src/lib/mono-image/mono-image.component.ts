import { Component, Input } from '@angular/core';
import { MonoFitType } from '../abstractions/mono-fit-type';

@Component({
    selector: 'mono-image',
    templateUrl: 'mono-image.component.html',
    styleUrls: ['mono-image.component.scss'],
})
export class MonoImageComponent {
    /** Path of the image */
    @Input() src: string = '';

    /** Whether to display loading */
    @Input() showLoading = false;

    /** Direction to fit image */
    @Input() fit: MonoFitType = MonoFitType.height;

    /** Indicates whether image has loaded */
    loaded = false;
}
