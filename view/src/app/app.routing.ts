import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const appRoutes = [
    {path:'login', component: LogInComponent, pathMatch:'full'},
    {path:'', component: AppComponent, pathMatch:'full'},
    {path:'sign-up', component: SignUpComponent, pathMatch:'full'}
]

export const Routing = RouterModule.forRoot(appRoutes);