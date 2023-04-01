import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyInputComponent } from './ny-input.component';

@NgModule({
    declarations: [NyInputComponent],
    imports: [CommonModule, FormsModule, NyIconModule],
    exports: [NyInputComponent],
})
export class NyInputModule {}
