import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { navigation } from '../../navigation/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navigation: any;
  visible: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.visible = false; // set navbar visible to false
    // Navigation data
    this.navigation = navigation;
  }
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.showNavbar(event.navbar); // show the navbar?
      });
  }

  showNavbar(event) {
    if (event === false) {
      this.visible = false;
    } else if (event === true) {
      this.visible = true;
    } else {
      this.visible = this.visible;
    }
  }
}
