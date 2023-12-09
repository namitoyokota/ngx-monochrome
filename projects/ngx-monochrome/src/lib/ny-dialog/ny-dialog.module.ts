import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NyButtonModule } from '../ny-button/ny-button.module';
import { NyDialogComponent } from './ny-dialog.component';

@NgModule({
    declarations: [NyDialogComponent],
    imports: [CommonModule, NyButtonModule],
    exports: [NyDialogComponent],
})
export class NyDialogModule {}
