import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyButtonComponent } from './ny-button.component';

@NgModule({
    declarations: [NyButtonComponent],
    imports: [CommonModule],
    exports: [NyButtonComponent],
})
export class NyButtonModule {}
