import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoCaptionComponent } from './mono-caption.component';

@NgModule({
    declarations: [MonoCaptionComponent],
    imports: [CommonModule],
    exports: [MonoCaptionComponent],
})
export class MonoCaptionModule {}
