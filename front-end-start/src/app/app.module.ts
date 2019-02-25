import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NewComponent } from './auctions/new/new.component';
import { SearchComponent } from './auctions/search/search.component';
import { SearchFormComponent } from './auctions/search-form/search-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponent,
    SearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
