import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyCardComponent } from './ny-card.component';

@NgModule({
    declarations: [NyCardComponent],
    imports: [CommonModule],
    exports: [NyCardComponent],
})
export class NyCardModule {}
