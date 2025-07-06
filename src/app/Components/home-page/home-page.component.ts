import { Component } from '@angular/core';
import { FeaturedCompetitionsComponent } from "./featured-competitions/featured-competitions.component";

@Component({
  selector: 'app-home-page',
  imports: [FeaturedCompetitionsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
