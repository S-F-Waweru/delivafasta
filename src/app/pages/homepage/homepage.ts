import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ChooseUs } from '../../components/choose-us/choose-us';
import { Partners } from '../../components/partners/partners';

@Component({
  selector: 'app-homepage',
  imports: [Hero, ChooseUs, Partners],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
