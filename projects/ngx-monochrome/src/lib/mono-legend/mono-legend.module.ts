import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoLegendComponent } from './mono-legend.component';

@NgModule({
    declarations: [MonoLegendComponent],
    imports: [CommonModule],
    exports: [MonoLegendComponent],
})
export class MonoLegendModule {}
