import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoCardComponent } from './mono-card.component';

@NgModule({
    declarations: [MonoCardComponent],
    imports: [CommonModule],
    exports: [MonoCardComponent],
})
export class MonoCardModule {}
