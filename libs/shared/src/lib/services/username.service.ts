import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  private username: string | null = null;
   
  saveUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }

  clearUsername(): void {
    this.username = null;
  }

  hasUsername(): boolean {
    return this.username !== null;
  }
}
