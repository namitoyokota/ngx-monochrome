import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from '../directives/click.directive';
import { MonoButtonModule } from '../mono-button/mono-button.module';
import { MonoIconModule } from '../mono-icon/mono-icon.module';
import { MonoMenuComponent } from './mono-menu.component';

@NgModule({
    declarations: [MonoMenuComponent, ClickOutsideDirective],
    imports: [CommonModule, MonoButtonModule, MonoIconModule],
    exports: [MonoMenuComponent],
})
export class MonoMenuModule {}
