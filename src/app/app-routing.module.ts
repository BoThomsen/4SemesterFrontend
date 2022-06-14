import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { DataloggerComponent } from './datalogger/datalogger.component';

const routes: Routes = [
  {path: '',redirectTo:'/items',pathMatch:'full'},
  {path:'plants',component:PlantListComponent},
  {path:'datalogger',component:DataloggerComponent},
  {path: '**', redirectTo:'/plants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
