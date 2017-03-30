import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

// Import all Components
import {
  ItemsGalleryComponent,
  ShoppingCartComponent,
  ItemComponent
} from './components';

// Import all Services
import {
  InventoryService,
  ShoppingCartService
} from './services';
import { TitleCasePipe } from './pipes/title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ItemsGalleryComponent,
    ItemComponent,
    ItemsGalleryComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    InventoryService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
