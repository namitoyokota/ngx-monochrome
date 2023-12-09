import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyLogoComponent } from './ny-logo.component';

@NgModule({
    declarations: [NyLogoComponent],
    imports: [CommonModule, NgOptimizedImage],
    exports: [NyLogoComponent],
})
export class NyLogoModule {}
