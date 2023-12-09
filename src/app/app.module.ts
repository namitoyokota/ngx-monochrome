import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonGroupModule,
    NyButtonModule,
    NyCaptionModule,
    NyCardModule,
    NyDialogModule,
    NyDividerModule,
    NyExpandModule,
    NyIconModule,
    NyImageModule,
    NyInputModule,
    NyLabelModule,
    NyLegendModule,
    NyLinkModule,
    NyMenuModule,
    NyMessageModule,
    NyPageModule,
    NyProgressModule,
    NySliderModule,
    NySpinnerModule,
    NySwitchModule,
    NyThemeSwitchModule,
} from 'ngx-monochrome';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NyLinkModule,
        NyImageModule,
        NyIconModule,
        NySpinnerModule,
        NyButtonModule,
        NyDividerModule,
        NyMessageModule,
        NyLabelModule,
        NyInputModule,
        NyMenuModule,
        NyButtonGroupModule,
        NyCaptionModule,
        NySwitchModule,
        NyThemeSwitchModule,
        NyPageModule,
        NyExpandModule,
        NyLegendModule,
        NySliderModule,
        NyProgressModule,
        NyDialogModule,
        NyCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
