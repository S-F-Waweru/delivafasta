import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AnimationService } from '../../service/animation';

@Component({
  selector: 'contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
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
