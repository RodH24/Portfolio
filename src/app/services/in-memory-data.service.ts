import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const works = [
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
    ];
    return {works};
  }
}
