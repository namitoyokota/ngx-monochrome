import { Component, Input } from '@angular/core';

@Component({
    selector: 'ny-image',
    templateUrl: './ny-image.component.html',
    styleUrls: ['./ny-image.component.scss'],
})
export class NyImageComponent {
    /** Path of the image */
    @Input() src: string = '';

    /** Indicates whether image has loaded */
    loaded = false;
}
