import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { UsernameService } from '@demo-workspace/shared';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'monarch-main';
  usernameService = inject(UsernameService);

  ngOnInit(): void {
    // Guardar un username de demostración
    this.usernameService.saveUsername('Demo User');
    console.log('Username set in monarch-main app');
  }
}
