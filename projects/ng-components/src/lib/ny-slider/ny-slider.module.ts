import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NySliderComponent } from './ny-slider.component';

@NgModule({
    declarations: [NySliderComponent],
    imports: [CommonModule],
    exports: [NySliderComponent],
})
export class NySliderModule {}
