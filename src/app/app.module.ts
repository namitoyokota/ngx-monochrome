import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NyComponentsModule } from '@namitoyokota/components';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NyComponentsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
