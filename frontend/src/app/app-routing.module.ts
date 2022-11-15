import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: "",component:HomeComponent },
{path:"home",component:HomeComponent},

{path:"edit",component:EditFormComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
