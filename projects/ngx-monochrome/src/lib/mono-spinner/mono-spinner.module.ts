import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoSpinnerComponent } from './mono-spinner.component';

@NgModule({
    declarations: [MonoSpinnerComponent],
    imports: [CommonModule, NgOptimizedImage],
    exports: [MonoSpinnerComponent],
})
export class MonoSpinnerModule {}
