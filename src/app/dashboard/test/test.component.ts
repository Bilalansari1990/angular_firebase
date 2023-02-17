import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnDestroy {
  selectedTabIndex: any;
  hide:boolean = true;
  public showLoader: boolean = false;

  private subscription: Subscription;
  timer = timer(1000);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.selectedTabIndex = this.route.snapshot.queryParamMap.get('tab');
    this.selectedTabIndex = parseInt(this.selectedTabIndex);
    // if selectedTabIndex >= number of tabs
    if (isNaN(this.selectedTabIndex) || this.selectedTabIndex < 0) {
      this.selectedTabIndex = 0;
    }
    this.setTimer();
  }
  ngOnDestroy(): void {
    if (this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }
  setTimer() {
    this.showLoader = true;
    this.subscription = this.timer.subscribe(() => {
      this.showLoader = false;
    });
  }
  onTabChange(selectedTabIndex: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: selectedTabIndex,
      },
    });
    this.selectedTabIndex = selectedTabIndex;
  }
}
