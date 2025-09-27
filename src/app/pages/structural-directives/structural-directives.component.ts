import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent { 
  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(value => !value);
  }

  //Condicional Switch
  viewMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }

  // Cycle For  
  users = signal([
    { id: 1, name: 'John Doe', role: 'admin' },
    { id: 2, name: 'Jane Smith', role: 'user' },
    { id: 3, name: 'Bob Johnson', role: 'user' },
  ]);
}
