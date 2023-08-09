import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeIcon: string = "home";

  toggleIconColor(iconName: string) {
    this.activeIcon = (this.activeIcon !== iconName) ? iconName : this.activeIcon;
  }

}
