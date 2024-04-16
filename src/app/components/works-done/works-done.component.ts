import { Component, Input } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WORKS } from 'src/assets/files/mock-works';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent {
  @Input() title: string = 'Trabajos';

  workList: WorkModel[] = WORKS;
}
