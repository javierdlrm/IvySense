import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TermsSearchQuery } from '../terms-search-form/terms-search-query.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'core-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  isExpanded = false;
  sidebarOpen = false;

  constructor(public router: Router, private translate: TranslateService) { }

  querySubmit(query: TermsSearchQuery) {
    this.collapse();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  openSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
