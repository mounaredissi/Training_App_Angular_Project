import { NgModule } from '@angular/core';
import { SessionItemComponent } from './session-item/session-item.component';
import { AdminComponent } from './admin/admin.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
@NgModule({
  declarations: [SessionItemComponent, AdminComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent],
  imports: [
    FormsModule,
    BrowserModule
  ]
  ,
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule { }
