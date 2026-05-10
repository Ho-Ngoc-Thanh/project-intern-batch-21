import { Component, Input } from '@angular/core';
import { Lead } from '../../models';

@Component({
  selector: 'app-lead-information-card',
  standalone: true,
  imports: [],
  templateUrl: './lead-information-card.component.html',
  styleUrl: './lead-information-card.component.scss'
})
export class LeadInformationCardComponent {
  @Input() lead!: Lead;
}

