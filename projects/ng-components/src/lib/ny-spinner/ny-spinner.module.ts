import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NySpinnerComponent } from './ny-spinner.component';

@NgModule({
    declarations: [NySpinnerComponent],
    imports: [CommonModule],
    exports: [NySpinnerComponent],
})
export class NySpinnerModule {}
