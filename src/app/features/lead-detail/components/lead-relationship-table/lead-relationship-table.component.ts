import { Component, Input } from '@angular/core';
import { Relationship } from '../../models';

@Component({
  selector: 'app-lead-relationship-table',
  standalone: true,
  imports: [],
  templateUrl: './lead-relationship-table.component.html',
  styleUrl: './lead-relationship-table.component.scss'
})
export class LeadRelationshipTableComponent {
  @Input() relationships!: Relationship[];
}

