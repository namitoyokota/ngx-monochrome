import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyPageComponent } from './ny-page.component';

@NgModule({
    declarations: [NyPageComponent],
    imports: [CommonModule],
    exports: [NyPageComponent],
})
export class NyPageModule {}
