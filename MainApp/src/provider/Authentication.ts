import { User } from "../model/User";
import { InterfaceAuthentication } from "../model/InterfaceAuthentication";

/**
 * Classe responsável por autenticar um usuário
 */
 export class Authentication implements InterfaceAuthentication {
     
    private usuario: User;
    private id: string;

    constructor(usuario: User){
        this.usuario = usuario;
        this.id = null;
    }

    authenticateByEmail(email: string, password: string): boolean {
        
        let validationEmail: boolean = (email == this.usuario.getEmail())
        let validationPassword: boolean = (password == this.usuario.getPassword())
        
        if(validationPassword && validationEmail)
            this.id = this.usuario.getName();    
        
        return(validationPassword && validationEmail);
    }

    authenticateByToken(token: string): boolean {
        
        let validationToken: boolean = (token == this.usuario.getToken())
        
        if(validationToken)
            this.id = this.usuario.getName();    
        
        return(validationToken);
    }

    isConnected(): boolean {
        return(this.id != null);
    }

    getId(): string {
        return(this.id);
    }
}