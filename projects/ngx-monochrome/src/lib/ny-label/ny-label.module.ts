import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyLabelComponent } from './ny-label.component';

@NgModule({
    declarations: [NyLabelComponent],
    imports: [CommonModule, NyIconModule],
    exports: [NyLabelComponent],
})
export class NyLabelModule {}
