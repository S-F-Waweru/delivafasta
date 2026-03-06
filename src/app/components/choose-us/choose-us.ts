import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AnimationService } from '../../service/animation';

@Component({
  selector: 'choose-us',
  imports: [],
  templateUrl: './choose-us.html',
  styleUrl: './choose-us.css',
})
export class ChooseUs {
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
