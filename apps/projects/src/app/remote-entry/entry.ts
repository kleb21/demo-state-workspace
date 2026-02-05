import { Component, OnInit, inject } from '@angular/core';
import { NxWelcome } from './nx-welcome';
import { UsernameService } from '@demo-workspace/shared';

@Component({
  imports: [NxWelcome],
  selector: 'app-projects-entry',
  template: `
    <h1>Welcome {{ username }}!</h1>
    <app-nx-welcome></app-nx-welcome>
  `,
})
export class RemoteEntry implements OnInit {
  username: string | null = null;
  private usernameService = inject(UsernameService);

  ngOnInit(): void {
    this.username = this.usernameService.getUsername();
    console.log('Username loaded in Projects:', this.username);
  }
}
