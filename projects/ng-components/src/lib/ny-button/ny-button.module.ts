import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyButtonComponent } from './ny-button.component';

@NgModule({
    declarations: [NyButtonComponent],
    imports: [CommonModule, NyIconModule],
    exports: [NyButtonComponent],
})
export class NyButtonModule {}
