import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {DockModule} from 'primeng/dock';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LicenseComponent } from './page/license/license.component';
import { KalkulatorComponent } from './page/kalkulator/kalkulator.component';
import { UserComponent } from './page/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    KalkulatorComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    DockModule,
    MenubarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
