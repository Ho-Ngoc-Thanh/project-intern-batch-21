import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Relationship } from '../../../../models/interfaces/lead-detail.interface';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-lead-relationship-table',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, FormsModule],
  templateUrl: './lead-relationship-table.component.html',
  styleUrl: './lead-relationship-table.component.scss',
})
export class LeadRelationshipTableComponent {
  @Input() relationships!: Relationship[];

  isAddingNew = false;
  editingId: string | null = null;
  newRelationship: Partial<Relationship> = {
    name: '',
    leadId: '',
    type: '',
    relationship: '',
    avatarUrl: '',
  };

  trackByRel(_index: number, item: Relationship) {
    return item.id;
  }

  showAddForm() {
    this.isAddingNew = true;
    this.newRelationship = {
      name: '',
      leadId: '',
      type: '',
      relationship: '',
      avatarUrl: '',
    };
  }

  saveNewRelationship() {
    if (
      this.newRelationship.name &&
      this.newRelationship.leadId &&
      this.newRelationship.type &&
      this.newRelationship.relationship
    ) {
      const newRel: Relationship = {
        id: `r${Date.now()}`,
        name: this.newRelationship.name,
        leadId: this.newRelationship.leadId,
        type: this.newRelationship.type,
        relationship: this.newRelationship.relationship,
        avatarUrl:
          this.newRelationship.avatarUrl || 'https://i.pravatar.cc/100',
      };
      this.relationships.push(newRel);
      this.cancelAdd();
    }
  }

  cancelAdd() {
    this.isAddingNew = false;
    this.newRelationship = {};
  }

  deleteRelationship(id: string) {
    this.relationships = this.relationships.filter((rel) => rel.id !== id);
  }

  startEdit(rel: Relationship) {
    this.editingId = rel.id;
  }

  saveEdit(rel: Relationship) {
    this.editingId = null;
  }

  cancelEdit() {
    this.editingId = null;
  }
}
