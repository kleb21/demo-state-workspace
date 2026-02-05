import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameService } from '@demo-workspace/shared';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `<h1>Welcome to Projects {{username}}! asdfsdfsdf</h1>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome implements OnInit {
  usernameService = inject(UsernameService).getUsername();
  username = this.usernameService;
  ngOnInit(): void {
  console.log('Username in NxWelcome (Projects):', this.usernameService);
  }
}
