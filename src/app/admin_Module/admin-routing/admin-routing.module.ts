import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminlogComponent } from '../../admin_Module/admin-routing/adminlog/adminlog.component';
import { AdminregComponent } from '../../admin_Module/admin-routing/adminreg/adminreg.component';
import { CatalogComponent } from '../../router/catalog/catalog.component';
import { GaurdCanactiveGuard } from '../../guardExample/gaurd-canactive.guard';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  {
    path: 'adminloginpage',
    component: AdminlogComponent
    ,
  },
  { path: 'adminregpage', component: AdminregComponent,canActivate: [GaurdCanactiveGuard] },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AdminlogComponent, AdminregComponent, CatalogComponent],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
