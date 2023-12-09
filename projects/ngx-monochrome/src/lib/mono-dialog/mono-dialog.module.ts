import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonoButtonModule } from '../mono-button/mono-button.module';
import { MonoDialogComponent } from './mono-dialog.component';

@NgModule({
    declarations: [MonoDialogComponent],
    imports: [CommonModule, MonoButtonModule],
    exports: [MonoDialogComponent],
})
export class MonoDialogModule {}
