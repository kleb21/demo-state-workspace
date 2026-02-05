import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsernameService } from '@demo-workspace/shared';

import { Layout } from '@demo-workspace/layout';

@Component({
  imports: [RouterModule, Layout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'monarch-main';
  usernameService = inject(UsernameService);

  ngOnInit(): void {
    this.usernameService.saveUsername('Demo User');
    console.log('Username set in monarch-main app');
  }
}
