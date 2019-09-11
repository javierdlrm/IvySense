import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { RecommendationsOverviewComponent } from '@features/recommendations/overview/recommendations-overview.component';

@NgModule({
  imports: [SharedModule, CoreModule],
  exports: [RecommendationsOverviewComponent],
  declarations: [RecommendationsOverviewComponent],
  entryComponents: [RecommendationsOverviewComponent]
})
export class RecommendationsModule { }
