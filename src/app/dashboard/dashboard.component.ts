import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewChecked {
  links: any[] = [
    {
      icon: 'home',
      body: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'edit',
      body: 'Test',
      route: '/dashboard/test',
    },
  ];
  isWindowWidthLessThan1023: boolean = false;
  isWindowWidthLessThan768: boolean = false;
  @ViewChild('snav') sidenavContainer: MatSidenavContainer | any;
  pageTitle = '';
  pageSubTitle = '';

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    router.events.subscribe((val) => {
      this.links.forEach((link) => {
        if (router.url == link.route) {
          this.pageTitle = link.body;
          if (this.pageTitle == 'Dashboard') return (this.pageTitle = '');
        }
        if (router.url.includes(link.body.toLocaleLowerCase())) {
          this.pageTitle = link.body;
          if (this.pageTitle == 'Dashboard') return (this.pageTitle = '');
        }
        this.pageSubTitle = router.url.includes('add') ? 'Add' : '';
        this.pageSubTitle = router.url.includes('phases') ? 'Phases' : '';
        this.pageSubTitle = router.url.includes('details') ? 'Details' : '';
        this.pageSubTitle = router.url.includes('activity') ? 'Activity' : '';
        this.pageSubTitle = router.url.includes('payment') ? 'Payment' : '';
        this.pageSubTitle = router.url.includes('projects/details')
          ? 'Details'
          : '';
        this.pageSubTitle = router.url.includes('orders') ? 'Orders' : '';
        this.pageSubTitle = router.url.includes('order-details')
          ? 'Order-Details'
          : '';
      });
    });
  }
  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.onWindowWidth();
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.onWindowWidth();
  }

  onWindowWidth() {
    this.isWindowWidthLessThan1023 = window.innerWidth > 1023 ? false : true;
    if (!this.isWindowWidthLessThan1023) this.sidenavContainer.open();
    this.isWindowWidthLessThan768 = window.innerWidth > 768 ? false : true;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['./']);
  }
}
