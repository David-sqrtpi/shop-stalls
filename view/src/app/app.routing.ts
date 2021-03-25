import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./components/log-in/log-in.component";

const appRoutes = [
    {path:'login', component: LogInComponent, pathMatch:'full'}
]

export const Routing = RouterModule.forRoot(appRoutes);