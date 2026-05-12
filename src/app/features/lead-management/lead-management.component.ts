import { Component } from '@angular/core';
import { LeadFilterBarComponent } from './lead-filter-bar/lead-filter-bar.component';
import { LeadTableComponent } from './lead-table/lead-table.component';
import { LeadToolbarComponent } from './lead-toolbar/lead-toolbar.component';

@Component({
  selector: 'app-lead-management',
  standalone: true,
  imports: [LeadFilterBarComponent, LeadTableComponent, LeadToolbarComponent],
  templateUrl: './lead-management.component.html',
  styleUrl: './lead-management.component.scss'
})
export class LeadManagementComponent {

}
