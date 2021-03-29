import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddServicesComponent } from "./components/add-services/add-services.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { HolaComponent } from "./components/hola/hola.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

import { AuthGuard } from "./guards/auth.guard";
import { NegateUserLoggedGuard } from "./guards/negate-user-logged.guard";

const appRoutes = [
    {path:'login', component: LogInComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'', component: HolaComponent},
    {path:'sign-up', component: SignUpComponent, canActivate:[NegateUserLoggedGuard]},
    {path:'create-user', component: CreateUserComponent, canActivate:[AuthGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'user/create', component: CreateUserComponent, canActivate:[AuthGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'add-services', component: AddServicesComponent, canActivate:[AuthGuard]}
]

export const Routing = RouterModule.forRoot(appRoutes);