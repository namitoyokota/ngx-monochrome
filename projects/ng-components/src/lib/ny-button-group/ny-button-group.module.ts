import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyButtonGroupComponent } from './ny-button-group.component';

@NgModule({
    declarations: [NyButtonGroupComponent],
    imports: [CommonModule, NyIconModule],
    exports: [NyButtonGroupComponent],
})
export class NyButtonGroupModule {}
