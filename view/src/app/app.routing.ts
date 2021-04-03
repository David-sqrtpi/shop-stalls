import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddServicesComponent } from "./components/add-services/add-services.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { HomeComponent } from "./components/home/home.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { ModifyProductComponent } from "./components/modify-product/modify-product.component";
import { ModifyServicesComponent } from "./components/modify-services/modify-services.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

import { AuthGuard } from "./guards/auth.guard";
import { NegateUserLoggedGuard } from "./guards/negate-user-logged.guard";
import { UserListComponent } from "./user-list/user-list.component";

const appRoutes = [
    {path:'login', component: LogInComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'', component: HomeComponent},
    {path:'sign-up', component: SignUpComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'user/create', component: CreateUserComponent, canActivate:[AuthGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'add-services', component: AddServicesComponent, canActivate:[AuthGuard]},
    {path:'modify-product', component: ModifyProductComponent, canActivate:[AuthGuard]},
    {path:'modify-services', component: ModifyServicesComponent, canActivate:[AuthGuard]},
    {path:'welcome', component: WelcomeComponent, canActivate:[AuthGuard]},
    {path:'user/list', component: UserListComponent, canActivate:[AuthGuard]},
    {path:'**', component: NotFoundComponent},
]

export const Routing = RouterModule.forRoot(appRoutes);