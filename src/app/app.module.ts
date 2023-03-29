import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NyIconModule, NyImageModule, NyLinkModule, NySpinnerModule } from '@namitoyokota/ng-components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyLinkModule, NyImageModule, NyIconModule, NySpinnerModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
