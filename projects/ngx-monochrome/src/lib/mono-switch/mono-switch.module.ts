import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoButtonModule } from '../mono-button/mono-button.module';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoSwitchComponent } from './mono-switch.component';

@NgModule({
    declarations: [MonoSwitchComponent],
    imports: [CommonModule, MonoButtonModule, MonoIconModule],
    exports: [MonoSwitchComponent],
})
export class MonoSwitchModule {}
