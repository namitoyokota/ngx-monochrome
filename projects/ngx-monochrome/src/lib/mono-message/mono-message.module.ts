import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoMessageComponent } from './mono-message.component';

@NgModule({
    declarations: [MonoMessageComponent],
    imports: [CommonModule, MonoIconModule],
    exports: [MonoMessageComponent],
})
export class MonoMessageModule {}
