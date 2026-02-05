import { Injectable, signal, WritableSignal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  private readonly username: WritableSignal<string | null> = signal<string | null>(null);

  saveUsername(username: string): void {
    this.username.set(username);
  }

  getUsername(): string | null {
    return this.username();
  }

  /** Expose a readonly Signal so consumers can subscribe reactively */
  usernameSignal(): Signal<string | null> {
    return this.username.asReadonly();
  }

  clearUsername(): void {
    this.username.set(null);
  }

  hasUsername(): boolean {
    return this.username() !== null;
  }
}
