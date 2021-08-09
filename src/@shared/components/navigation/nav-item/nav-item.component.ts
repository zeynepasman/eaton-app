import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() item: any;
  @Input() showSubmenu: boolean;
  @Input() isExpanded: boolean;
  @Input() isShowing: boolean;
}
