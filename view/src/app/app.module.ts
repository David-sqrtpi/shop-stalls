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
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//My Components
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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModifyServicesComponent } from './components/modify-services/modify-services.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { ItemServiceComponent } from './components/item-service/item-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    CreateCompanyComponent,
    EmailFormComponent,
    PasswordFormComponent,
    CreateUserComponent,
    AddProductComponent,
    AddServicesComponent,
    ModifyProductComponent,
    NotFoundComponent,
    WelcomeComponent,
    ModifyServicesComponent,
    UserListComponent,
    ProductListComponent,
    NavBarComponent,
    UserDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    ServiceListComponent,
    InvoiceComponent,
    InvoiceDetailComponent,
    ItemProductComponent,
    ItemServiceComponent,
  
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
    Routing,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
