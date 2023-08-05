import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeIcon: string | null = "home";

  toggleIconColor(iconName: string) {
      if (this.activeIcon === iconName) {
          this.activeIcon = null;
      } else {
          this.activeIcon = iconName;
      }
  }
}
