import { Request, Response, Router } from "express";
import { InterfaceRouter } from "../entity/interfaces/InterfaceRouter";
import { MethodNotImplementedException } from "../provider/exceptions/MethodNotImplementedException";
import { InvalidParameterException} from "../provider/exceptions/InvalidParameterException";

/**
 * Classe responsável por gerenciar as rotas de Index.
 */
export class IndexRoute implements InterfaceRouter {

  public addRoutesToGET(router: Router) {  
    if(router == null || router == undefined)
        throw new InvalidParameterException("Parametro router é 'null'");

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
