import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NyInputComponent } from './ny-input.component';

@NgModule({
    declarations: [NyInputComponent],
    imports: [CommonModule, FormsModule],
    exports: [NyInputComponent],
})
export class NyInputModule {}
