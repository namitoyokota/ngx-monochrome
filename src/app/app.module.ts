import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NyHyperlinkModule, NyImageModule } from '@namitoyokota/components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyHyperlinkModule, NyImageModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
