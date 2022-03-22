import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './components/audit/audit.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LpauditComponent } from './components/lpaudit/lpaudit.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
 
  {
  path:'audit',
  component:AuditComponent,
},
{
  path:'lpaudit',
  component:LpauditComponent
},
{
  path:'',
  redirectTo:'/audit',
  pathMatch:'full'  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
