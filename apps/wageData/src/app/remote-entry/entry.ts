import { Component, inject } from '@angular/core';
import { UsernameService } from '@demo-workspace/shared';

@Component({
  imports: [],
  selector: 'app-wagedata-entry',
  template: `<div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Wage Data Remote Entry</h1>
    <p class="mb-4">Welcome, {{ username }}!</p>
    </div>`
})
export class RemoteEntry {
  private readonly usernameService = inject(UsernameService);

  username = this.usernameService.getUsername();
}
