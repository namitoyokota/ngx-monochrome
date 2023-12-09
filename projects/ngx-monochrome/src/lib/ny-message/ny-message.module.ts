import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyMessageComponent } from './ny-message.component';

@NgModule({
    declarations: [NyMessageComponent],
    imports: [CommonModule, NyIconModule],
    exports: [NyMessageComponent],
})
export class NyMessageModule {}
