# ngx-monochrome

> This npm package is created for my personal use. It is a component library with black and white style.

<!-- [![GitHub](https://img.shields.io/github/stars/namitoyokota/ngx-monochrome?style=social)](https://github.com/namitoyokota/ngx-monochrome) -->

<!-- [![Twitter](https://img.shields.io/twitter/follow/namitoyokota?style=social)](https://twitter.com/namitoyokota) -->

## Demo

See how components are using in this [demo](https://ngx-monochrome.namito.wiki/).

## Installation

ngx-monochrome is available as an [npm package](https://www.npmjs.com/package/ngx-monochrome).

You can install this package either by using npm:

```
npm install ngx-monochrome
```

or by using yarn:

```
yarn add ngx-monochrome
```

## Components

Here is a list fo components that are currently in this library:

-   ny-button
-   ny-button-group
-   ny-caption
-   ny-divider
-   ny-icon
-   ny-image
-   ny-label
-   ny-link
-   ny-logo
-   ny-menu
-   ny-message
-   ny-page
-   ny-spinner
-   ny-switch
-   ny-theme-switch

Documentation for each component is coming soon.

## Usage

Import module for a component to try

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    NyButtonModule
} from 'ngx-monochrome';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NyButtonModule // ADD THIS LINE
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export AppModule
```

Use component in HTML

```HTML
<ny-button text="Button" (clicked)="echo('button clicked')"></ny-button>
```

## Screenshot

![Screenshot](https://i.imgur.com/nSs513v.png)
