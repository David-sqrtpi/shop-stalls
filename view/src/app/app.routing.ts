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
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const appRoutes = [
    {path:'login', component: LogInComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'', component: HomeComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'products/create', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'users/create', component: CreateUserComponent, canActivate:[AuthGuard]},
    {path:'services/create', component: AddServicesComponent, canActivate:[AuthGuard]},
    {path:'products/modify', component: ModifyProductComponent, canActivate:[AuthGuard]},
    {path:'services/modify', component: ModifyServicesComponent, canActivate:[AuthGuard]},
    {path:'welcome', component: WelcomeComponent, canActivate:[AuthGuard]},
    {path:'users', component: UserListComponent, canActivate:[AuthGuard]},
    {path:'products', component: ProductListComponent, canActivate:[AuthGuard]},
    {path:'products/:id', component: ProductDetailComponent, canActivate:[AuthGuard]},
    {path:'users/:id', component: UserDetailComponent, canActivate:[AuthGuard]},
    {path:'**', component: NotFoundComponent},
]

export const Routing = RouterModule.forRoot(appRoutes);