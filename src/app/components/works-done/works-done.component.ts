import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent {
  @Input() title: string = 'Trabajos';

  workList = [
    {
      "id": 1,
      "title": "Primer Trabajo",
      "urlImage": "https://cyberzon3.com/assets/cyber_zon3_logo-ad3d2abb.png",
      "description": "Me encanto este trabajo"
    },
    {
      "id": 2,
      "title": "Segundo Trabajo",
      "urlImage": "https://cyberzon3.com/assets/cyber_zon3_logo-ad3d2abb.png",
      "description": "Me encanto este trabajo tambien"
    },
    {
      "id": 3,
      "title": "Tercer Trabajo",
      "urlImage": "https://cyberzon3.com/assets/cyber_zon3_logo-ad3d2abb.png",
      "description": "Me encanto este trabajo al igual que los otros"
    }
  ]
}
