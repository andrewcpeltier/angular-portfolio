import { Injectable, Type } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { AiProjectsComponent } from '../components/ai-projects/ai-projects.component';
import { AngularProjectsComponent } from '../components/angular-projects/angular-projects.component';
import { AndroidProjectsComponent } from '../components/android-projects/android-projects.component';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  constructor() { }

  getPages() {
    return [
      {
        component: AboutMeComponent,
        name: "About Me",
        index: 0
      },
      {
        component: AiProjectsComponent,
        name: "AI Projects",
        index: 1
      },
      {
        component: AngularProjectsComponent,
        name: "Angular Projects",
        index: 2
      },
      {
        component: AndroidProjectsComponent,
        name: "Android Projects",
        index: 3
      }

    ] as {component: Type<any>, name: string, index: number}[];
  }
}
