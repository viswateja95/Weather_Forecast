import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo: "HomeComponent", pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'weatherdetail', component: DetailsComponent},
    {path:'', redirectTo:"HomeComponent"},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
