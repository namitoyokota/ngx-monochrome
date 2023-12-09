import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyButtonModule } from '../ny-button/ny-button.module';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NySwitchComponent } from './ny-switch.component';

@NgModule({
    declarations: [NySwitchComponent],
    imports: [CommonModule, NyButtonModule, NyIconModule],
    exports: [NySwitchComponent],
})
export class NySwitchModule {}
