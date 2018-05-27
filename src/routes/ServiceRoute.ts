import { NextFunction, Request, Response, Router } from "express";
import { InterfaceRouter } from "../model/InterfaceRouter";
import { MethodNotImplementedException } from "../provider/MethodNotImplementedException";

/**
 * Classe responsável por gerenciar as rotas de Service.
 */
export class ServiceRoute implements InterfaceRouter {

  public addRoutesToGET(router: Router) {
    throw new MethodNotImplementedException("Rota GET de Service não encontrado.");
  }

  public addRoutesToPOST(router: Router) {

    //Post Rota service
    router.post("/service", (req: Request, res: Response) => {
      // importa dados cercomp (localhost:5000)
    });
  }
  
}
