import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoProgressComponent } from './mono-progress.component';

@NgModule({
    declarations: [MonoProgressComponent],
    imports: [CommonModule],
    exports: [MonoProgressComponent],
})
export class MonoProgressModule {}
