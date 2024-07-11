import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
@Input() data!:boolean;
@Output() dataChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSidebar() {
    console.log("asdasdasdsadadas")
    this.data = !this.data;
    console.log(this.data);
   this.dataChange.emit(this.data);
  }
  
}
