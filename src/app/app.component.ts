import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddEmployeeListComponent } from './components/add-employee-list/add-employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectivesComponent],
  //it import here for data binding --->DatabindingComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
