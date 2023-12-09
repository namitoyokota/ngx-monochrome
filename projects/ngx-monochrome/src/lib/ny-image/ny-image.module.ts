import { NgModule } from '@angular/core';
import { NySpinnerModule } from '../ny-spinner/ny-spinner.module';
import { NyImageComponent } from './ny-image.component';
@NgModule({
    declarations: [NyImageComponent],
    imports: [NySpinnerModule],
    exports: [NyImageComponent],
})
export class NyImageModule {}
