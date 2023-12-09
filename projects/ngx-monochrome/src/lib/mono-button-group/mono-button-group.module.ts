import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoButtonGroupComponent } from './mono-button-group.component';

@NgModule({
    declarations: [MonoButtonGroupComponent],
    imports: [CommonModule, MonoIconModule],
    exports: [MonoButtonGroupComponent],
})
export class MonoButtonGroupModule {}
