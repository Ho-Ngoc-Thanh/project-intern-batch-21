import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [
    TagModule,
    SelectButtonModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    SvgIconComponent,
  ],
  templateUrl: './featured-properties.component.html',
  styleUrl: './featured-properties.component.scss',
})
export class FeaturedPropertiesComponent {
  titleMenuOptions = [
    { label: 'All Properties', value: 'all' },
    { label: 'For Sale', value: 'sale' },
    { label: 'Sold', value: 'sold' },
  ];
  selectedValue: string = this.titleMenuOptions[0].value;
  properties: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/properties.json').subscribe((res) => {
      this.properties = res;
      console.log('data properties: ', this.properties);
    });
  }

  get filteredProperties() {
    if (this.selectedValue === 'all') {
      return this.properties;
    }

    return this.properties.filter(
      (item: any) => item.value === this.selectedValue,
    );
  }

  // Format price into a shortened format (K, M)
  // Examples:
  // - 1,800,000  -> $1.8M
  // - 1,000,000  -> $1M
  // - 950,000    -> $950K
  // - 600        -> $600
  formatPrice(price: number): string {
    const million = 1000000;
    const thousand = 1000;

    if (price >= million) {
      return `$${(price / million).toFixed(1)}M`.replace('.0', '');
    }

    if (price >= thousand) {
      return `$${(price / thousand).toFixed(1)}K`.replace('.0', '');
    }

    return `$${price}`;
  }
}
