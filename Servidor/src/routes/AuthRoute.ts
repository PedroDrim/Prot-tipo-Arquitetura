import { NextFunction, Request, Response, Router } from "express";
import { Authentication } from "../provider/Authentication";
import { InterfaceAuthentication } from "../model/InterfaceAuthentication";
import { InterfaceRouter } from "../model/InterfaceRouter";
import { User } from "../model/User";

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
    let usuario: User = new User("Capivara", "teste@hotmail.com", "password", "tk0001");
    this.auth = new Authentication(usuario);
  }

  public addRoutesToGET(router: Router) {

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
      } else {
        res.send("Erro ao connectar.");
      }

    });
    
  }

  public addRoutesToPOST(router: Router) {

    //Adicionar uma nova person via REST
    router.post("/auth", (req: Request, res: Response) => {
     
      let email: string = req.body.email;
      let password: string = req.body.password;
      let isAutentic: boolean = this.auth.authenticateByEmail(email, password);

      // let token: string = req.body.token;
      // let isAutentic: boolean = this.auth.autenticateByToken(token);
      
      if(isAutentic) {
        res.redirect("/auth");
      } else {
        res.status(400).send("Não foi possível autenticar usuário.");
      }

    });

  }

}
