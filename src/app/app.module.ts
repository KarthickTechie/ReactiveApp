import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { InvdetailComponent } from './components/invdetail/invdetail.component';
import { AuditComponent } from './components/audit/audit.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { LpauditComponent } from './components/lpaudit/lpaudit.component';
import { AuditgridComponent } from './components/auditgrid/auditgrid.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InvdetailComponent,
    AuditComponent,
    TutorialComponent,
    LpauditComponent,
    AuditgridComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
