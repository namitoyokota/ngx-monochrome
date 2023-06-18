import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyLegendComponent } from './ny-legend.component';

@NgModule({
    declarations: [NyLegendComponent],
    imports: [CommonModule],
    exports: [NyLegendComponent],
})
export class NyLegendModule {}
