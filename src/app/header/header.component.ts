import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  toHome(){
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  toExperience(){
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
