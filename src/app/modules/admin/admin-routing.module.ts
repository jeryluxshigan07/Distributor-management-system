import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'client',component:ClientComponent},
      {path:'farmer',component:FarmerComponent},
      {path:'vendor',component:VendorComponent},
      {path:'products',component:ProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
