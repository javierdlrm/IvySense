import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '@core/state/state.service';
import { TermsSearchQuery } from '@core/components/terms-search-form/terms-search-query.model';
import { DomainService } from '@core/domain/domain.service';
import { AssetService } from '@core/asset/asset.service';
import { EntityService } from '@core/entity/entity.service';
import { Terms } from '@core/entity/models/terms.model';
import { Source } from '@core/asset/models/source.model';
import { TaskService } from '@core/state/task.service';
import { Destroyable } from '@core/utils/destroyable';
import { TermsConcept } from '@core/entity/models/terms-concept.model';
import { TermsCategory } from '@core/entity/models/terms-category.model';

@Component({
  selector: 'map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.scss'],
})
export class MapOverviewComponent extends Destroyable implements OnInit {

  query: TermsSearchQuery;
  subject: { name: string, category: string, source?: Source };

  layout: 'summary' | 'detail' = 'summary';
  terms: TermsCategory[];
  termsCategory: TermsCategory;

  constructor(private stateService: StateService, private domainService: DomainService, private entityService: EntityService, private assetService: AssetService,
    private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
    super();
    // this.stateService.termsQuery$.pipe(takeUntil(this.destroy$)).subscribe((query: TermsSearchQuery) => { this.queryChanged(query); });
    // this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event: Event) => { if (event instanceof NavigationEnd) { this.navigationEnd(); } });
  }

  async ngOnInit(): Promise<void> {
    await this.taskService.monitor(async () => { await this.init(); });
  }

  async init(): Promise<void> {
    // await this.checkDirectAccess(); // Check access through url
    // await this.getTerms(); // Load terms
  }

  roomClicked(roomName: string): void {
    this.router.navigate(['/dashboard'], { queryParams: { roomName } });
  }

  //#endregion
}
