import { NgModule } from '@angular/core';
import { SessionItemComponent } from './session-item/session-item.component';
import { AdminComponent } from './admin/admin.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { CommonModule } from '@angular/common';
import { FakeSessionItemService } from './FakeSessionItemService';
import {RouterModule, Routes} from '@angular/router';
const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [
  
  { path: 'add', component: SessionAddFormComponent },
  { path: 'edit/:id', component:
  SessionEditFormComponent },
  { path: 'list', component: SessionItemListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
  ],
  }
  ];
@NgModule({
  declarations: [SessionItemComponent, AdminComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
    ]
  ,
  providers: [FakeSessionItemService],
  bootstrap: [AdminComponent],
})
export class AdminModule { }
