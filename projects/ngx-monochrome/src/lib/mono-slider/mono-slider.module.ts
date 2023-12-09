import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoSliderComponent } from './mono-slider.component';

@NgModule({
    declarations: [MonoSliderComponent],
    imports: [CommonModule],
    exports: [MonoSliderComponent],
})
export class MonoSliderModule {}
