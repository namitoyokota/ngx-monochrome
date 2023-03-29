import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NyButtonModule, NyDividerModule, NyIconModule, NyImageModule, NyLinkModule, NySpinnerModule } from '@namitoyokota/ng-components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyLinkModule, NyImageModule, NyIconModule, NySpinnerModule, NyButtonModule, NyDividerModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
