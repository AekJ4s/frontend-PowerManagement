import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RoomListComponent } from './components/roomlist/roomlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Power Management System';

  constructor(private router: Router) {}
  // ngOnInit() {
  //   this.router.navigate(['loading']);
  //   setTimeout(() => {
  //     this.opennav = true
  //     this.router.navigate(['home']);
  //     console.log("COUNT")
  //   }, 1000);
  // }

  roomlist() {
    this.router.navigate(['roomlist']);
  }
  dashboard() {
    this.router.navigate(['dashboard']);
  }
}
