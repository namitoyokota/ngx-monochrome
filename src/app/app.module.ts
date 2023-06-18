import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonGroupModule,
    NyButtonModule,
    NyCaptionModule,
    NyDividerModule,
    NyExpandModule,
    NyIconModule,
    NyImageModule,
    NyInputModule,
    NyLabelModule,
    NyLegendModule,
    NyLinkModule,
    NyLogoModule,
    NyMenuModule,
    NyMessageModule,
    NyPageModule,
    NyProgressModule,
    NySliderModule,
    NySpinnerModule,
    NySwitchModule,
    NyThemeSwitchModule,
} from '@namitoyokota/ng-components';

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
        NyLogoModule,
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
