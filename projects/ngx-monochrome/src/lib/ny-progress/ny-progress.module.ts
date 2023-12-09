import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyProgressComponent } from './ny-progress.component';

@NgModule({
    declarations: [NyProgressComponent],
    imports: [CommonModule],
    exports: [NyProgressComponent],
})
export class NyProgressModule {}
