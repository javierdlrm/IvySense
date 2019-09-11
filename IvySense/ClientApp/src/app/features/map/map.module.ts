import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MapOverviewComponent } from '@features/map/overview/map-overview.component';

@NgModule({
  imports: [SharedModule, CoreModule],
  exports: [MapOverviewComponent],
  declarations: [MapOverviewComponent],
  entryComponents: [MapOverviewComponent]
})
export class MapModule { }
