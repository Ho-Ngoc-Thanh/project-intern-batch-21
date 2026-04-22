import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { LeadPaginationComponent } from './lead-pagination/lead-pagination.component';

@Component({
  selector: 'app-lead-table',
  standalone: true,
  imports: [CommonModule,CheckboxModule,TableModule, LeadPaginationComponent, SvgIconComponent ],
  templateUrl: './lead-table.component.html',
  styleUrl: './lead-table.component.scss'
})
export class LeadTableComponent {


leads = [
  {
    owner: 'John Doe',
    lead: 'Sean Lewis (Huynh Tran)',
    avatar: 'https://i.pravatar.cc/40?img=1',
    showAvatar: true, // CASE 1
    leadId: '93964209',
    leadType: 'Prospect',
    status: 'Cellphone',
    stage: 'Cellphone',
    contactName: 'Sean Lewis',
    cellphone: '(872) 808-2228',
    work: '(872)'
  },
  {
    owner: 'Mary Johnson',
    lead: 'Heather Phelps (Hanh Nguyen)',
    avatar: null,
    showAvatar: false, // CASE 2 (chỉ text)
    leadId: '72095259',
    leadType: 'Prospect',
    status: 'Interest',
    stage: 'Cellphone',
    contactName: 'Hanh Nguyen',
    cellphone: '(431) 863-3901',
    work: '(431)'
  },
  {
    owner: 'Robert White',
    lead: 'Alice Scott (Anh Pham)',
    avatar: 'https://i.pravatar.cc/40?img=3',
    showAvatar: true, // CASE 1
    leadId: '64025801',
    leadType: 'Customer',
    status: 'Follow now',
    stage: 'Quote & Agent',
    contactName: 'Alice Scott',
    cellphone: '(515) 540-5844',
    work: '(515)'
  },
  {
    owner: 'David Lee',
    lead: 'Kimberly Harper (Kim Phan)',
    avatar: null,
    showAvatar: true, // CASE 3 (chữ tròn)
    leadId: '79740157',
    leadType: 'Customer',
    status: 'Follow now',
    stage: 'Get Quote',
    contactName: 'Kim Phan',
    cellphone: '(300) 284-5608',
    work: '(300)'
  },
  {
    owner: 'Sarah Green',
    lead: 'Angel Young (Anh Dinh)',
    avatar: 'https://i.pravatar.cc/40?img=5',
    showAvatar: true, // CASE 1
    leadId: '60088327',
    leadType: 'Customer',
    status: 'Follow later',
    stage: 'Get Quote',
    contactName: 'Anh Dinh',
    cellphone: '(610) 430-2971',
    work: '(610)'
  },
  {
    owner: 'James King',
    lead: 'Chelsea Wilson (Chien Le)',
    avatar: null,
    showAvatar: false, // CASE 2
    leadId: '35792510',
    leadType: 'Prospect',
    status: 'Stop',
    stage: 'Cellphone',
    contactName: 'Chelsea Wilson',
    cellphone: '(991) 671-7177',
    work: '(991)'
  },
  {
    owner: 'Karen Scott',
    lead: 'Christian Rodriguez (Trinh Trinh)',
    avatar: 'https://i.pravatar.cc/40?img=7',
    showAvatar: true, // CASE 1
    leadId: '30706374',
    leadType: 'Prospect',
    status: 'Cellphone',
    stage: 'Cellphone',
    contactName: 'Christian Rodriguez',
    cellphone: '(811) 463-1554',
    work: '(811)'
  },
  {
    owner: 'Marri Mark',
    lead: 'Marcus Macias (Mai Anh Nguyen)',
    avatar: null,
    showAvatar: true, // CASE 3
    leadId: '35803570',
    leadType: 'Customer',
    status: 'Cellphone',
    stage: 'Won',
    contactName: 'Mai Anh Nguyen',
    cellphone: '(903) 276-8543',
    work: '(903)'
  },
  {
    owner: 'Patricia Taylor',
    lead: 'Christopher Smith (Hoang Phan)',
    avatar: 'https://i.pravatar.cc/40?img=9',
    showAvatar: true, // CASE 1
    leadId: '23482394',
    leadType: 'Prospect',
    status: 'Closed',
    stage: 'Get Quote',
    contactName: 'Hoang Phan',
    cellphone: '(578) 170-5251',
    work: '(578)'
  },
  {
    owner: 'Charles Miller',
    lead: 'Christine Bartlett (Vy Doan)',
    avatar: null,
    showAvatar: false, // CASE 2
    leadId: '97566368',
    leadType: 'Customer',
    status: 'Follow later',
    stage: 'Won',
    contactName: 'Christine Bartlett',
    cellphone: '(759) 352-2654',
    work: '(759)'
  },
  {
    owner: 'Laura Edwards',
    lead: 'Jill Gaines (Minh Le)',
    avatar: 'https://i.pravatar.cc/40?img=11',
    showAvatar: true,
    leadId: '74969729',
    leadType: 'Customer',
    status: 'Stop',
    stage: 'Quote & Agent',
    contactName: 'Minh Le',
    cellphone: '(675) 113-4224',
    work: '(675)'
  },
  {
    owner: 'Amanda Young',
    lead: 'Megan Mosley (My Tran)',
    avatar: null,
    showAvatar: true, // CASE 3
    leadId: '78325974',
    leadType: 'Prospect',
    status: 'Interest',
    stage: 'Won',
    contactName: 'Megan Mosley',
    cellphone: '(469) 586-6708',
    work: '(469)'
  },
  {
    owner: 'Christopher Hill',
    lead: 'Scott Campbell (Viet Dinh)',
    avatar: 'https://i.pravatar.cc/40?img=13',
    showAvatar: true,
    leadId: '92789855',
    leadType: 'Customer',
    status: 'Follow now',
    stage: 'Quote & Agent',
    contactName: 'Viet Dinh',
    cellphone: '(451) 223-5620',
    work: '(451)'
  },
  {
    owner: 'Brian Carter',
    lead: 'Kristin Mason (Kien Pham)',
    avatar: null,
    showAvatar: false, // CASE 2
    leadId: '37528997',
    leadType: 'Prospect',
    status: 'Cellphone',
    stage: 'Cellphone',
    contactName: 'Kristin Mason',
    cellphone: '(419) 654-7499',
    work: '(419)'
  },
  {
    owner: 'Laura Edwards',
    lead: 'John Foster (Long Nguyen)',
    avatar: 'https://i.pravatar.cc/40?img=15',
    showAvatar: true,
    leadId: '29556154',
    leadType: 'Customer',
    status: 'Closed',
    stage: 'Quote & Agent',
    contactName: 'John Foster',
    cellphone: '(386) 995-1766',
    work: '(386)'
  }
];

  selectedLeads: any[] = [];

  getStatusClass(status: string) {
    switch (status) {
      case 'Cellphone':
        return 'bg-blue-100 text-blue-600';
      case 'Interest':
        return 'bg-purple-100 text-purple-600';
      case 'Follow now':
        return 'bg-orange-100 text-orange-600';
      case 'Follow later':
        return 'bg-green-100 text-green-600';
      case 'Stop':
        return 'bg-red-100 text-red-600';
      case 'Closed':
        return 'bg-gray-200 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  }

  getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}
getAvatarColor(name: string) {
  const colors = [
    'bg-pink-100 text-pink-600',
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
} 

}
