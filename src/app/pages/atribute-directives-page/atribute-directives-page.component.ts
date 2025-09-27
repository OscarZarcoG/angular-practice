import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-atribute-directives-page',
  imports: [NgClass, NgStyle],
  templateUrl: './atribute-directives-page.component.html',
})
export class AtributeDirectivesPageComponent {

  title = "Atribute Directives";
  state = signal<'active' | 'error' | 'neutral'>('neutral');
  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The current state is active';
      case 'error':
        return 'There is an error';
      case 'neutral':
        return 'The state is neutral';
    }
  });
  setActive() {
    this.state.set('active');
  }
  setError() {
    this.state.set('error');
  }
  setNeutral() {
    this.state.set('neutral');
  }
}