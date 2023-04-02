import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonGroupModule,
    NyButtonModule,
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
