import { Component, ElementRef, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { WorldBankDataService } from '../services/world-bank-data.service';

@Component({
  standalone: true,
  selector: 'app-svg',
  templateUrl: '../../assets/WorldMap.svg',
  styleUrls: ['./svg.component.css'],
})

export class SvgComponent implements OnInit {

  @Output() countryData = new EventEmitter<any>();

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2, 
    private worldBankDataService: WorldBankDataService
  ) {}

  ngOnInit() {
    this.addHoverListener();
  }

  addHoverListener() {
    const svg = this.elementRef.nativeElement.querySelector('svg');
    if (!svg) return;
  
    const paths = Array.from(svg.querySelectorAll('path'));
    paths.forEach(path => {
      this.renderer.listen(path, 'mouseenter', (event) => this.onMouseEnter(event));
    });
  }

  onMouseEnter(event: Event) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;
    this.worldBankDataService.getCountryInfo(countryId).subscribe({
      next: (response) => {
        this.countryData.emit(response);
        console.log('Combined Country Info:', response);
      },
      error: (error) => {
        console.error('Error fetching combined country info:', error);
      }
    });
  }
}
