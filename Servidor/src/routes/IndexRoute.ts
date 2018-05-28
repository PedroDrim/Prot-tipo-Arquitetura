import { NextFunction, Request, Response, Router } from "express";
import { InterfaceRouter } from "../model/InterfaceRouter";
import { MethodNotImplementedException } from "../provider/MethodNotImplementedException";

/**
 * Classe responsável por gerenciar as rotas de Index.
 */
export class IndexRoute implements InterfaceRouter {

  public addRoutesToGET(router: Router) {

    //Get Rota padrão (index)
    router.get("/", (req: Request, res: Response) => {

      //set options
      let options: Object = {
        "title": "Protótipo"
      };

      var view: string = "loginByEmail";
      res.render(view, { prop: options });
    });
  }
  
  public addRoutesToPOST(router: Router) {
    throw new MethodNotImplementedException("Rota POST de Index não encontrado.");
  }
}
