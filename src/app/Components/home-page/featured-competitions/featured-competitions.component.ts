import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { max, Observable } from 'rxjs';
import { CompetitionService } from '../../../services/competition.service';
import { CompModel } from '../../../model/compModel';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface Competition {
  title: string;
  description?: string;
  endDate: Date;
}
@Component({
  selector: 'app-featured-competitions',
   imports: [FormsModule,AsyncPipe,CommonModule,RouterLink],
  templateUrl: './featured-competitions.component.html',
  styleUrl: './featured-competitions.component.css'
})
export class FeaturedCompetitionsComponent implements OnInit {
  
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
