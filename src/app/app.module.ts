import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonGroupModule,
    NyButtonModule,
    NyCaptionModule,
    NyDividerModule,
    NyIconModule,
    NyImageModule,
    NyInputModule,
    NyLabelModule,
    NyLinkModule,
    NyLogoModule,
    NyMenuModule,
    NyMessageModule,
    NySpinnerModule,
    NySwitchModule,
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
