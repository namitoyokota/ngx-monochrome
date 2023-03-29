import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyMessageComponent } from './ny-message.component';

@NgModule({
    declarations: [NyMessageComponent],
    imports: [CommonModule],
    exports: [NyMessageComponent],
})
export class NyMessageModule {}
