import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ClientComponent,
    FarmerComponent,
    VendorComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
