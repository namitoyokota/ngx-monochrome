import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoInputComponent } from './mono-input.component';

@NgModule({
    declarations: [MonoInputComponent],
    imports: [CommonModule, FormsModule, MonoIconModule],
    exports: [MonoInputComponent],
})
export class MonoInputModule {}
