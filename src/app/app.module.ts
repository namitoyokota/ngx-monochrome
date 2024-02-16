import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    MonoButtonGroupModule,
    MonoButtonModule,
    MonoCaptionModule,
    MonoCardModule,
    MonoDialogModule,
    MonoDividerModule,
    MonoExpandModule,
    MonoIconModule,
    MonoImageModule,
    MonoInputModule,
    MonoLabelModule,
    MonoLegendModule,
    MonoLinkModule,
    MonoMenuModule,
    MonoMessageModule,
    MonoPageModule,
    MonoProgressModule,
    MonoSliderModule,
    MonoSpinnerModule,
    MonoSwitchModule,
    MonoTextareaModule,
    MonoThemeSwitchModule,
} from 'ngx-monochrome';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MonoLinkModule,
        MonoImageModule,
        MonoIconModule,
        MonoSpinnerModule,
        MonoButtonModule,
        MonoDividerModule,
        MonoMessageModule,
        MonoLabelModule,
        MonoInputModule,
        MonoMenuModule,
        MonoButtonGroupModule,
        MonoCaptionModule,
        MonoSwitchModule,
        MonoThemeSwitchModule,
        MonoPageModule,
        MonoExpandModule,
        MonoLegendModule,
        MonoSliderModule,
        MonoProgressModule,
        MonoDialogModule,
        MonoCardModule,
        MonoTextareaModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
