import { Component } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  selectedTab: string = 'bus'; // Default selected tab

  fromPlace: string = '';
  toPlace: string = '';
  journeyDate: string = '';
  returnDate: string = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  search() {
    alert(`Searching for ${this.selectedTab.toUpperCase()} from ${this.fromPlace} to ${this.toPlace} on ${this.journeyDate}`);
  }
}
