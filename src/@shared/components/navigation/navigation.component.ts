import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'fuse-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  @Input() navigation: any;
  @Input() isNav: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() isExpanded;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
