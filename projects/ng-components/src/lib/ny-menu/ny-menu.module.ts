import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from '../directives/click.directive';
import { NyButtonModule } from '../ny-button/ny-button.module';
import { NyIconModule } from '../ny-icon/ny-icon.module';
import { NyMenuComponent } from './ny-menu.component';

@NgModule({
    declarations: [NyMenuComponent, ClickOutsideDirective],
    imports: [CommonModule, NyButtonModule, NyIconModule],
    exports: [NyMenuComponent],
})
export class NyMenuModule {}
