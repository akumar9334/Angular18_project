import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Hello from admin</h1>
      <p>This is a standalone component with inline HTML.</p>
    </div>
  `,
  styleUrls: ['./add-employee-list.component.css']
})
export class AddEmployeeListComponent {}
