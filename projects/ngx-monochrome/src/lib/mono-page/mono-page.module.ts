import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoPageComponent } from './mono-page.component';

@NgModule({
    declarations: [MonoPageComponent],
    imports: [CommonModule],
    exports: [MonoPageComponent],
})
export class MonoPageModule {}
