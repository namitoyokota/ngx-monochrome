import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { NySpinnerComponent } from './ny-spinner.component';

@NgModule({
    declarations: [NySpinnerComponent],
    imports: [CommonModule, NgOptimizedImage],
    exports: [NySpinnerComponent],
})
export class NySpinnerModule {}
