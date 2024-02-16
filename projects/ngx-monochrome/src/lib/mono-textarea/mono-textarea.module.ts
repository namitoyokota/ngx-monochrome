import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoTextareaComponent } from './mono-textarea.component';

@NgModule({
    declarations: [MonoTextareaComponent],
    imports: [CommonModule, FormsModule, MonoIconModule],
    exports: [MonoTextareaComponent],
})
export class MonoTextareaModule {}
