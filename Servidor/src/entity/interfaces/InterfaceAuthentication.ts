/**
 * Interface para implementação de autenticação de usuario.
 */
export interface InterfaceAuthentication {

  authenticateByEmail(email: string, password: string): boolean;
  authenticateByToken(token: string): boolean;
  isConnected(): boolean;
  getId(): string;
}
