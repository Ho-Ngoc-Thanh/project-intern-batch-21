import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { CreateLeadSidebarComponent } from './components/create-lead-sidebar/create-lead-sidebar.component';
import { MainContactFormComponent } from './components/main-contact-form/main-contact-form.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';



Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-create-lead',
  standalone: true,
  imports: [BaseChartDirective, CreateLeadSidebarComponent, MainContactFormComponent, PersonalInfoFormComponent, AddressFormComponent],
  templateUrl: './create-lead.component.html',
  styleUrl: './create-lead.component.scss'
})
export class CreateLeadComponent {

}
