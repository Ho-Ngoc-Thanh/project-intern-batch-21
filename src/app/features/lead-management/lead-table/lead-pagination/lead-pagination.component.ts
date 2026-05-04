import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-lead-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, PaginatorModule],
  templateUrl: './lead-pagination.component.html',
  styleUrl: './lead-pagination.component.scss',
})
export class LeadPaginationComponent {
  @Output() pageChange = new EventEmitter<{ page: number; rows: number }>();

  rows = 15;
  totalRecords = 1500;
  currentPage = 0;
  jumpPage = 1;

  rowsOptions = [
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
  ];

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }

  get pages(): (number | string)[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    return [1, 2, '...', this.totalPages - 1, this.totalPages];
  }

  onPageChange(event: PaginatorState) {
    this.currentPage = event.page ?? 0;
    this.rows = event.rows ?? this.rows;
    this.jumpPage = this.currentPage + 1;
    this.emitPageChange();
  }

  onRowsChange() {
    this.currentPage = 0;
    this.jumpPage = 1;
    this.emitPageChange();
  }

  goToPage(page?: number | string) {
    if (page === '...') return;

    const targetPage = page ? Number(page) : this.jumpPage;

    if (targetPage < 1) {
      this.jumpPage = 1;
    } else if (targetPage > this.totalPages) {
      this.jumpPage = this.totalPages;
    } else {
      this.jumpPage = targetPage;
    }

    this.currentPage = this.jumpPage - 1;
    this.emitPageChange();
  }

  prevPage() {
    if (this.currentPage <= 0) return;

    this.currentPage--;
    this.jumpPage = this.currentPage + 1;
    this.emitPageChange();
  }

  nextPage() {
    if (this.currentPage >= this.totalPages - 1) return;

    this.currentPage++;
    this.jumpPage = this.currentPage + 1;
    this.emitPageChange();
  }

  private emitPageChange() {
    this.pageChange.emit({
      page: this.currentPage,
      rows: this.rows,
    });
  }
}