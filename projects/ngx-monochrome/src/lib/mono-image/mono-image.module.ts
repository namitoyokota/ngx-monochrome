import { NgModule } from '@angular/core';
import { MonoSpinnerModule } from '../mono-spinner/mono-spinner.module';
import { MonoImageComponent } from './mono-image.component';

@NgModule({
    declarations: [MonoImageComponent],
    imports: [MonoSpinnerModule],
    exports: [MonoImageComponent],
})
export class MonoImageModule {}
