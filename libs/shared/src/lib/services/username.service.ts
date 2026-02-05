import { Injectable } from '@angular/core';

/**
 * Servicio para gestionar el username a nivel global
 * Se inyecta en root y mantiene el estado en memoria
 */
@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  private username: string | null = null;

  /**
   * Guarda el username
   * @param username El nombre de usuario a guardar
   */
  saveUsername(username: string): void {
    this.username = username;
  }

  /**
   * Recupera el username
   * @returns El username guardado o null si no existe
   */
  getUsername(): string | null {
    return this.username;
  }

  /**
   * Limpia el username
   */
  clearUsername(): void {
    this.username = null;
  }

  /**
   * Verifica si existe un username guardado
   * @returns true si existe un username, false en caso contrario
   */
  hasUsername(): boolean {
    return this.username !== null;
  }
}
