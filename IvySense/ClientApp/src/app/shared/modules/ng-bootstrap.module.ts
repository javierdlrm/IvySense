import { NgModule } from '@angular/core';
import { NgbTypeaheadModule, NgbAlertModule, NgbModalModule, NgbDropdownModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [NgbTypeaheadModule, NgbAlertModule, NgbModalModule, NgbDropdownModule, NgbAccordionModule],
    exports: [NgbTypeaheadModule, NgbAlertModule, NgbModalModule, NgbDropdownModule, NgbAccordionModule]
})
export class NgBootstrapModule { }
