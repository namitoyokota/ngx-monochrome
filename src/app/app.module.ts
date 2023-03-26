import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NyHyperlinkModule, NyIconModule, NyImageModule } from '@namitoyokota/ng-components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyHyperlinkModule, NyImageModule, NyIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
