import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-quijesuis',
  templateUrl: './quijesuis.component.html',
  styleUrls: ['./quijesuis.component.scss']
})
export class QuijesuisComponent {
  public routes = routes;

}
