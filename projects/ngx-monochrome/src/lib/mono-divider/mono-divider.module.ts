import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoDividerComponent } from './mono-divider.component';

@NgModule({
    declarations: [MonoDividerComponent],
    imports: [CommonModule],
    exports: [MonoDividerComponent],
})
export class MonoDividerModule {}
