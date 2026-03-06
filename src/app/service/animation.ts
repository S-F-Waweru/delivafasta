import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  fadeInUp(elements: any[], useScrollTrigger = true) {
    const config: any = {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    };

    if (useScrollTrigger) {
      config['scrollTrigger'] = {
        trigger: elements[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      };
    }
    return gsap.fromTo(elements, { opacity: 0, y: 20, scale: 0.97 }, config);
  }
}
