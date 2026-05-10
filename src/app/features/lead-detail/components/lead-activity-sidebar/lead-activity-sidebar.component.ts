import { Component, Input } from '@angular/core';
import { Note, Task, Comment } from '../../models';

@Component({
  selector: 'app-lead-activity-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './lead-activity-sidebar.component.html',
  styleUrl: './lead-activity-sidebar.component.scss'
})
export class LeadActivitySidebarComponent {
  @Input() note!: Note;
  @Input() task!: Task;
  @Input() comment!: Comment;
}

