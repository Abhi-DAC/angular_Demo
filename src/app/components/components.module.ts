import { input, NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,NgClass
  ]
})
export class ComponentsModule { }
