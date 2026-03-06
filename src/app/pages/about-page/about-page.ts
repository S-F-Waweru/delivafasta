import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AnimationService } from '../../service/animation';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  @ViewChildren('animate') animateElements!: QueryList<ElementRef>;

  constructor(private animService: AnimationService) {}

  ngAfterViewInit() {
    const elements = this.animateElements.map((el) => el.nativeElement);
    this.animService.fadeInUp(elements);
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
