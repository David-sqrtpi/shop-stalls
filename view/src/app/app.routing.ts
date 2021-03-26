import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const appRoutes = [
    {path:'login', component: LogInComponent, pathMatch:'full'},
    {path:'', component: AppComponent, pathMatch:'full'},
    {path:'sign-up', component: SignUpComponent, pathMatch:'full'},
    {path:'add-product', component: AddProductComponent, pathMatch:'full'},
    {path:'user/create', component: CreateUserComponent, pathMatch:'full'}
]

export const Routing = RouterModule.forRoot(appRoutes);