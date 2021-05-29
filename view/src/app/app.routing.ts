import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddServicesComponent } from "./components/add-services/add-services.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { HomeComponent } from "./components/home/home.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { ModifyProductComponent } from "./components/modify-product/modify-product.component";
import { ModifyServicesComponent } from "./components/modify-services/modify-services.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

import { AuthGuard } from "./guards/auth.guard";
import { NegateUserLoggedGuard } from "./guards/negate-user-logged.guard";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ServiceListComponent } from "./components/service-list/service-list.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { InvoiceDetailComponent } from "./components/invoice-detail/invoice-detail.component";
import { ItemProductComponent } from "./components/item-product/item-product.component";
import { ItemServiceComponent } from "./components/item-service/item-service.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
import { PurchaseDetailComponent } from "./components/purchase-detail/purchase-detail.component";
import { InventoryComponent } from "./components/inventory/inventory.component";


const appRoutes = [
    {path:'', component: HomeComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'login', component: LogInComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'welcome', component: WelcomeComponent, canActivate:[AuthGuard]},
    {path:'products/modify', component: ModifyProductComponent, canActivate:[AuthGuard]},
    {path:'inventory', component: InventoryComponent, canActivate:[AuthGuard]},
    {path:'inventory/:id', component: ProductDetailComponent, canActivate:[AuthGuard]},
    {path:'users', component: UserListComponent, canActivate:[AuthGuard]},
    {path:'users/create', component: CreateUserComponent, canActivate:[AuthGuard]},
    {path:'users/:id', component: UserDetailComponent, canActivate:[AuthGuard]},
    {path:'services', component: ServiceListComponent, canActivate:[AuthGuard]},
    {path:'services/create', component: AddServicesComponent, canActivate:[AuthGuard]},
    {path:'services/modify', component: ModifyServicesComponent, canActivate:[AuthGuard]},
    {path:'invoices', component: InvoiceComponent, canActivate:[AuthGuard]},
    {path:'invoices/:id', component: InvoiceDetailComponent, canActivate:[AuthGuard]},
    {path:'invoices/:id/product', component: ItemProductComponent, canActivate:[AuthGuard]},
    {path:'invoices/:id/service', component: ItemServiceComponent, canActivate:[AuthGuard]},
    {path:'purchases', component: PurchaseComponent, canActivate:[AuthGuard]},
    {path:'purchases/:id', component: PurchaseDetailComponent, canActivate:[AuthGuard]},
    {path:'**', component: NotFoundComponent},
]

export const Routing = RouterModule.forRoot(appRoutes);