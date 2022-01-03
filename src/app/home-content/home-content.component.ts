import { Component, OnInit } from '@angular/core';
import { Project } from '../modals/project';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  category: string = "";
  projects: Project[] = [];
  constructor() { 
  }

  ngOnInit(): void {
  }

  choiceCategory(){

  }

}
