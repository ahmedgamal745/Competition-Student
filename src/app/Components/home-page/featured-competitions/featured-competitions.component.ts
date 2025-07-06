import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { max } from 'rxjs';
interface Competition {
  title: string;
  description?: string;
  endDate: Date;
}
@Component({
  selector: 'app-featured-competitions',
   imports: [CommonModule],
  templateUrl: './featured-competitions.component.html',
  styleUrl: './featured-competitions.component.css'
})
export class FeaturedCompetitionsComponent {

  competitions : Competition[]=[
    {
      title: 'AI Innovation Challenge',
      description: 'Develop an AI solution to tackle real-world problems.',
      endDate: new Date(2025,12,31)
    },
    {
      title: 'Web Development Hackathon',
      description: 'Create a web application in 48 hours.',
      endDate: new Date(2025,11,15)
    },
    {
      title: 'Data Science Competition',
      description: 'Analyze datasets and present insights.',
      endDate: new Date(2025, 10,15)
    },
     {
      title: 'Web tech',
      description: 'this is web tech competition for GTU Student',
      endDate: new Date(2025, 6, 3) 
    },
    {
      title: 'Hackathon for Developers',
      description: 'A 24-hour coding marathon for developers',
      endDate: new Date(2025, 4, 31) 
    },
    {
      title: 'Web Fests',
      description: 'Showcase AI/ML-based innovative ideas',
      endDate: new Date(2025, 5, 30) 
    },
    {
      title: 'Player 456',
      description: 'From Korea',
      endDate: new Date(2001, 0, 1) 
    },
    {
      title: 'National Tech Hackathon',
      description: 'A 48-hour coding competition for tech geeks',
      endDate: new Date(2025, 4, 3) 
    },
    {
      title: 'Software Engineer',
      description: '3 Years of experience',
      endDate: new Date(2001, 0, 1) 
    }
  ]

  truncateText(text:string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  }
}
