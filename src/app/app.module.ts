import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { HttperrorInterceptor } from './interceptors/httperror.interceptor';
import { GauthComponent } from './gauth/gauth.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GauthComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttperrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
