import { Component, inject, OnInit } from '@angular/core';
import { CompModel } from '../../model/compModel';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../services/competition.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition',
  imports: [FormsModule,CommonModule],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements OnInit {
// index: any;
  ngOnInit(): void {
    this.getAllCompetitions();
  }

  newObject:CompModel = new CompModel();

  compService = inject(CompetitionService);
  SaveData(){
    this.compService.createCompetition(this.newObject).subscribe({
      next: (response) => {
        console.log('Competition created successfully:', response);
        alert('Competition created successfully!');
        // Optionally, reset the form or redirect
        this.newObject = new CompModel(); // Reset the form
      },error: (error) => {
        console.error('Error creating competition:', error);
        alert('Failed to create competition. Please try again later.');
      }
    })


  }

  compData: CompModel[] = [];

  getAllCompetitions() {
    this.compService.getAllCompetitions().subscribe({
      next: (response) => {
        // add data we was git to a new array to can use it in the template
        this.compData = response ;
        // this.compData = response as CompModel[];
        // this.compData.forEach((item) => {
        //   item.startDate = new Date(item.startDate);  
        //   item.endDate = new Date(item.endDate);
        // });
        console.log('Competitions fetched successfully:', response);
        // Handle the response as needed
      },
      error: (error) => {
        console.error('Error fetching competitions:', error);
        // Handle the error as needed
      }
    });
  }

  truncateText(text:string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  }
}
