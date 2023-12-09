import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NySwitchModule } from '../ny-switch/ny-switch.module';
import { NyThemeSwitchComponent } from './ny-theme-switch.component';

@NgModule({
    declarations: [NyThemeSwitchComponent],
    imports: [CommonModule, NySwitchModule],
    exports: [NyThemeSwitchComponent],
})
export class NyThemeSwitchModule {}
