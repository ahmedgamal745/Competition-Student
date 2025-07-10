import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../Constant/Constants';
import { CompModel, project } from '../model/compModel';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }

  getAllCompetitions() {
    return this.http.get<CompModel[]>(Constants.API_URL + 'GetAllCompetition', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  getCompetationById(id:number){
    return this.http.get<CompModel>(Constants.API_URL+"competition/"+id,{headers:{
      'Content-Type': 'application/json',
        'Accept': 'application/json' 
    }})
  }
  createCompetition(competitionData: CompModel) {
    
    return this.http.post(Constants.API_URL+'competition', competitionData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  createProject(projectData:project){
    return this.http.post(Constants.API_URL+'project',projectData,{headers:{
      'Content-Type': 'application/json',
        'Accept': 'application/json'
    }})
  }
}
