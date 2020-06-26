import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { ShoppingListModule } from './shoppinglist/shopping-list.module';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AuthModule,
    ShoppingListModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule,
    CoreModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
