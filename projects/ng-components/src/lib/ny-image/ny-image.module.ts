import { NgModule } from '@angular/core';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyImageComponent } from './ny-image.component';

@NgModule({
    declarations: [NyImageComponent],
    imports: [NyIconModule],
    exports: [NyImageComponent],
})
export class NyImageModule {}
