import { Request, Response, Router } from "express";
import { Authentication } from "../provider/Authentication";
import { InterfaceAuthentication } from "../entity/interfaces/InterfaceAuthentication";
import { InterfaceRouter } from "../entity/interfaces/InterfaceRouter";
import { InvalidParameterException } from "../provider/exceptions/InvalidParameterException";
import { ExceptionCollector } from "../provider/ExceptionCollector";

/**
 * Classe responsável por gerenciar as rotas de Auth.
 */
export class AuthRoute implements InterfaceRouter {

  private auth: InterfaceAuthentication;

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    this.auth = new Authentication();
  }

  public addRoutesToGET(router: Router) {
    if(router == null || router == undefined)
      throw new InvalidParameterException("Parametro router é 'null'");

    //Get Rota auth
    router.get("/auth", (req: Request, res: Response) => {

      if(this.auth.isConnected()) {
        //set options
        let options: Object = {
         "title": "Protótipo",
          "id": this.auth.getId()
        };

        var view: string = "mainPage";
        res.render(view, { prop: options });
      } else
        res.send("Erro ao connectar.");
    });
    
  }

  public addRoutesToPOST(router: Router) {
    if(router == null || router == undefined)
      throw new InvalidParameterException("Parametro router é 'null'");
      
    //Adicionar uma nova person via REST
    router.post("/auth/byEmail", (req: Request, res: Response) => {
     
      let email: string = req.body.email;
      let password: string = req.body.password;
      
      let isAutentic: boolean;

      try {
        isAutentic = this.auth.authenticateByEmail(email, password);
      } catch(error) {
        let collector: ExceptionCollector = new ExceptionCollector();
        collector.collect(error);
      }
  
      if(isAutentic)
        res.redirect("/auth");
      else
        res.status(400).send("Não foi possível autenticar usuário.");
    });      

    //Adicionar uma nova person via REST
    router.post("/auth/byToken", (req: Request, res: Response) => {
    
      let token: string = req.body.token;
      let isAutentic: boolean;
       
      try {
        isAutentic = this.auth.authenticateByToken(token);
      } catch(error) {
        let collector: ExceptionCollector = new ExceptionCollector();
        collector.collect(error);
      }

      if(isAutentic)
        res.redirect("/auth");
      else 
        res.status(400).send("Não foi possível autenticar usuário.");
    });

  }

}
