import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-lead-filter-bar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './lead-filter-bar.component.html',
  styleUrl: './lead-filter-bar.component.scss',
})
export class LeadFilterBarComponent {
  @ViewChild('swiperEl') swiperEl!: ElementRef;


  slidePrev() {
    this.swiperEl.nativeElement.swiper.slidePrev();
  }

  slideNext() {
    this.swiperEl.nativeElement.swiper.slideNext();
  }
}