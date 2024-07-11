import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component:LayoutComponent,
    // children: [
    //   {
    //     path:'dashboard',
    //     component:DashboardComponent
    //   },
    //   {
    //     path:'business',
    //     component:BusinessListComponent
    //   },
    //   {
    //     path:'businessForm',
    //     component:BusinessFormComponent
    //   }
    // ]
    }

    
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
