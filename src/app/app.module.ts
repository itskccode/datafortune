import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompleteComponent } from './components/complete/complete.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http'
import { RegistrationService } from './services/registration.service';

const route: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'contact-information', component: ContactInformationComponent },
  { path: 'complete', component: CompleteComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ContactInformationComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route),
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
