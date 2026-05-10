import { Component, Input } from '@angular/core';
import { Lead } from '../../models';

@Component({
  selector: 'app-lead-profile-header',
  standalone: true,
  imports: [],
  templateUrl: './lead-profile-header.component.html',
  styleUrl: './lead-profile-header.component.scss'
})
export class LeadProfileHeaderComponent {
  @Input() lead!: Lead;
}

