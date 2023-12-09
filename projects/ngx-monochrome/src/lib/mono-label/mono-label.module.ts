import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoLabelComponent } from './mono-label.component';

@NgModule({
    declarations: [MonoLabelComponent],
    imports: [CommonModule, MonoIconModule],
    exports: [MonoLabelComponent],
})
export class MonoLabelModule {}
