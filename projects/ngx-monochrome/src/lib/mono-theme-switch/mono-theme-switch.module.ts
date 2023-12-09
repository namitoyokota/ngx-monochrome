import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoSwitchModule } from '../mono-switch/mono-switch.module';
import { MonoThemeSwitchComponent } from './mono-theme-switch.component';

@NgModule({
    declarations: [MonoThemeSwitchComponent],
    imports: [CommonModule, MonoSwitchModule],
    exports: [MonoThemeSwitchComponent],
})
export class MonoThemeSwitchModule {}
