import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationService } from '../../service/animation';

@Component({
  selector: 'hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChildren('animate') animateElements!: QueryList<ElementRef>;
  constructor(private animService: AnimationService) {}

  ngAfterViewInit(): void {
    const elements = this.animateElements.map((el) => el.nativeElement);
    this.animService.fadeInUp(elements);
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
