import { Router } from "express";

/**
 * Interface para implementação de rotas.
 */
export interface InterfaceRouter {

  addRoutesToGET(router: Router): void;
  addRoutesToPOST(router: Router): void;
}
