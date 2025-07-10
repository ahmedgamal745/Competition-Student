import { Component, inject, signal, WritableSignal, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { CompModel, project } from '../../model/compModel';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-submit-projects',
  imports: [FormsModule],
  templateUrl: './submit-projects.component.html',
  styleUrl: './submit-projects.component.css'
})
export class SubmitProjectsComponent  {
 currentCompId: number = 0
 src = inject(CompetitionService)
 userdata =inject(UserService)
 competationData: CompModel = new CompModel;
projectObj:project = new project;

 constructor(private activatedRoute : ActivatedRoute){
  this.activatedRoute.params.subscribe((res:any)=>{
    this.currentCompId = res.id
    this.getCompById()
  })

 }


 getCompById(){
  this.src.getCompetationById(this.currentCompId).subscribe({
    next:(res)=>{
      this.competationData= res
    }
  })
 }
  onSave(){

    if (!this.projectObj.projectTitle || !this.projectObj.description || !this.projectObj.submissionDate) {
    alert('Please fill in all required fields.');
    return;
  }
    this.projectObj.userId = Number(this.userdata.loggedUserId)
    this.projectObj.competitionId = this.currentCompId


    this.src.createProject(this.projectObj).subscribe({
      next: (res) => {
        console.log(res);
        alert('Project submitted successfully!');
      },
      error: (err) => {
        console.error('Submission failed:', err);
        alert('Failed to submit project. Please check your input or try again later.');
      }
    });
  }
}
