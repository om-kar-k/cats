import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CatAddComponent,
    CatListComponent,
    CatEditComponent,
    CatDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
