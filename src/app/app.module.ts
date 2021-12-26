import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
