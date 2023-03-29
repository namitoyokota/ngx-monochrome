import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyLabelComponent } from './ny-label.component';

@NgModule({
    declarations: [NyLabelComponent],
    imports: [CommonModule],
    exports: [NyLabelComponent],
})
export class NyLabelModule {}
