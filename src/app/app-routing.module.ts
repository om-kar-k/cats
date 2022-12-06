import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatAddComponent } from './cat-add/cat-add.component';

const routes: Routes = [
  {path:"catlist",component:CatListComponent},
   {path : "details/:id",component:CatDetailsComponent},
   {path: "edit/:id",component:CatEditComponent},
   { path: "add", component: CatAddComponent }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

