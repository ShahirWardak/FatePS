import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScriptsComponent } from './components/scripts/scripts.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoreComponent } from './pages/store/store.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    NavigationComponent,
    ScriptsComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    StoreComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
