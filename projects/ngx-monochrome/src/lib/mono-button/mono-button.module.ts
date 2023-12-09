import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoButtonComponent } from './mono-button.component';

@NgModule({
    declarations: [MonoButtonComponent],
    imports: [CommonModule, MonoIconModule],
    exports: [MonoButtonComponent],
})
export class MonoButtonModule {}
