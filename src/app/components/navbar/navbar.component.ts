import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navBarItem: string[] = ["All NFCs", "Gaming", "Digital Art", "Fashion"]
  selectedTab: string = "All NFCs";


  onButtonClick(tab: string): void {
    this.selectedTab = tab;
    // this.router.navigate([`/${tab}`]); // Navigate to the selected route
  }

}
