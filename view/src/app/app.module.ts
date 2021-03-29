import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//My Components
import { FormExampleComponent } from './components/form-example/form-example.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HolaComponent } from './components/hola/hola.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddServicesComponent } from "./components/add-services/add-services.component";

//routes
import { Routing } from './app.routing';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    SignUpComponent,
    HolaComponent,
    HomeComponent,
    LogInComponent,
    CreateCompanyComponent,
    EmailFormComponent,
    PasswordFormComponent,
    CreateUserComponent,
    AddProductComponent,
    AddServicesComponent,
    ModifyProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
