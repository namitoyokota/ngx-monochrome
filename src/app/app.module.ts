import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonModule,
    NyDividerModule,
    NyIconModule,
    NyImageModule,
    NyLinkModule,
    NyMessageModule,
    NySpinnerModule,
} from '@namitoyokota/ng-components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyLinkModule, NyImageModule, NyIconModule, NySpinnerModule, NyButtonModule, NyDividerModule, NyMessageModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
