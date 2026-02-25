import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [ToastModule,CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent {

}
