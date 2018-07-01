import { User } from "../User";

/**
 * Interface para abstrair a instanciação de usuarios.
 */
export interface InterfaceFactory {

  createUser(): User;
}
