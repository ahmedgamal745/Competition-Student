import { Component, inject, signal } from '@angular/core';
import { FeaturedCompetitionsComponent } from "./featured-competitions/featured-competitions.component";
import { CompetitionService } from '../../services/competition.service';
import { CompModel } from '../../model/compModel';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
src = inject(CompetitionService)


  CompitionLest= signal<CompModel[]>([])
ngOnInit(): void {
    this.src.getAllCompetitions().subscribe((res)=>{
      this.CompitionLest.set(res)
    })
  }
  

  truncateText(text:string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  }
}
