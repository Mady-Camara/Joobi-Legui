import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/modals/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  constructor() {
    this.projects = [
      new Project("Creation d'une application web", "Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera", "../../assets/img/project-plan.png", 300000, "01/01/2022","12:15" ,"121323224", "Ouvert"), 
      new Project("Creation d'une application mobile", "Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera", "../../assets/img/project-management.png", 100000, "31/12/2022", "23:18", "121325424", "Ouvert"), 
      new Project("Web designer", "Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera Super fast and power efficient A lot of fast memory High resolution camera", "../../assets/img/choices.png", 250000, "17/11/2021", "13:18", "123925424", "Fermé")
    ];
   }

   getColor(state: string){
      return state === 'Ouvert' ? 'green' : 'red';
   }

   getDescribe(description: string){
    if(description.length > 290){
      return description.substring(0, 290) + '...';
    }
    return description;
   }

  ngOnInit(): void {
  }

}
