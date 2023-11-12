import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showFiller = false;

  constructor(private authService: AuthService){

  }
  logout(): void {
    this.authService.logout();
  }
}
